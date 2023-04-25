<script setup>
    import { ref } from "vue"
    import SmoothFade from "./SmoothFade.vue"

    defineProps({
        msg: { type: String, default: "" }
    })

    const count = ref(0)
    const show = ref(true)
</script>

<template>
    <br /><br /><br /><br /><br />
    <a href="#" @click.prevent="show = !show">Show / Hide</a>
    <SmoothFade v-model="show" :duration="1000">
        <h1>{{ msg }}</h1>
        <p>
            Check out
            <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
        </p>
        <p>
            Install
            <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
            in your IDE for a better DX
        </p>
        <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    </SmoothFade>

    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
    </div>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>
