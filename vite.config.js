import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.js"),
            name: "SmoothFade",
            fileName: (format) => `smooth-fade.${format}.js`
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                }
            }
        }
    }
})
