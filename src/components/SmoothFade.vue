<script setup>
    import { onMounted, ref, watch } from "vue"

    const emit = defineEmits(["update:modelValue"])
    const props = defineProps({
        modelValue: { type: Boolean, default: false },
        duration: { type: Number, default: 700 },
        easing: { type: String, default: "ease-in-out" }
    })

    const reSlot = ref(null)
    const height = ref(0)

    function getHeight(el, styles = {}) {
        if (!el?.cloneNode) return 0

        const clone = el.cloneNode(true)
        clone.style = {
            overflow: "visible",
            height: "auto",
            maxHeight: "none",
            opacity: "0",
            visibility: "hidden",
            display: "block",
            ...styles
        }

        el.after(clone)
        const height = clone.offsetHeight
        clone.remove()

        return height
    }

    watch(() => reSlot.value, (e) => (height.value = getHeight(e))) // prettier-ignore
    watch(() => props.modelValue, (e) => showHide(e)) // prettier-ignore

    const showHide = (show = true) => {
        if (show) {
            reSlot.value.style.display = "block"
            reSlot.value.animate(
                { height: ["0", `${height.value}px`], opacity: [0, 1] },
                { duration: props.duration, easing: props.easing, fill: "forwards" }
            )
        } else {
            reSlot.value.animate(
                { height: [`${height.value}px`, 0], opacity: [1, 0] },
                { duration: props.duration, easing: props.easing, fill: "both" }
            ).onfinish = () => {
                emit("update:modelValue", false)
                reSlot.value.style.display = "none"
            }
        }
    }

    onMounted(() => {
        if (!props.modelValue) {
            reSlot.value.style.display = "none"
            reSlot.value.animate({ height: [0] }, { duration: 1, fill: "forwards" })
        }
    })
</script>

<template>
    <div ref="reSlot" :class="!props.modelValue ? 'xfade' : null">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .xfade {
        overflow: hidden;
    }
</style>
