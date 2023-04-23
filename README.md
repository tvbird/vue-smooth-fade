# Vue 3 Smooth Fade

Vue 3 plugin for smooth hiding and showing content

## Demo
![alt text]((https://github.com/tvbird/vue-smooth-fade/blob/main/demo.gif?raw=true))

## Installation
```
npm i vue-smooth-fade
```

## Usage
Inside vue components use:

```vue
<script setup>
    import { SmoothFade } from 'vue-smooth-fade'
    import 'vue-smooth-fade/dist/style.css' // Import styles
    
    import { ref } from 'vue'
    
    const show = ref(false)
</script>

<template>
    <SmoothFade v-model="show">
        <div>
            ........
        </div>
    </SmoothFade>
    
    <a href="#" @click.prevent="show = !show">Toggle</a>
</template>
```


## Props

| Attribute      |   Type   |    Default    | Description                                                                |
|:---------------|:--------:|:-------------:|:---------------------------------------------------------------------------|
| duration       |  Number  |      700      | show and hide duration                                                     |
| easing         |  String  | `ease-in-out` | [easing](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function) |                 
| overflow       | Boolean  |    `false`    | Set overflow:hidden to parent element                                      |