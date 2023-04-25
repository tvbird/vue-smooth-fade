# Vue 3 Smooth Fade

Vue 3 плагин для плавного скрытие и показа контента

## Установка
```
npm i vue-smooth-fade
```

## Demo
![Demo](https://user-images.githubusercontent.com/14884577/233840228-86e24072-cb56-40a5-8a08-11de13b51848.gif)

## Использование
Внутри vue компонентов:

```vue
<script setup>
    import { SmoothFade } from 'vue-smooth-fade'
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