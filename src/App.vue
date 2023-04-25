<script setup>
    import { ref } from "vue"
    import HelloWorld from "./components/HelloWorld.vue"
    import SmoothFade from "./components/SmoothFade.vue"

    const show = ref(true)
</script>

<template>
    <a href="#" @click.prevent="show = !show">Show / Hide</a>
    <SmoothFade v-model="show" :overflow="true">
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
        </div>
    </SmoothFade>

    <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
