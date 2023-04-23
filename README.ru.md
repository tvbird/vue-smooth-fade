# Vue 3 Smooth Fade

Vue 3 плагин для плавного скрытие и показа контента

## Установка
```
npm i vue-smooth-fade
```

## Использование
Внутри vue компонентов:

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

| Атрибут  |   Тип   | По умолчанию  | Описание                                                                                  |
|:---------|:-------:|:-------------:|:------------------------------------------------------------------------------------------|
| duration | Number  |      700      | Продолжительность в мс                                                                    |
| easing   | String  | `ease-in-out` | [Скорость изменения мс](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function) |
| overflow | Boolean |    `false`    | Set overflow:hidden to parent element                                                     |