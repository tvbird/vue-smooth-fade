<script setup>
    import { onMounted, onUnmounted, ref, watch } from "vue"

    const emit = defineEmits(["update:modelValue"])
    const props = defineProps({
        modelValue: { type: Boolean, default: false },
        duration: { type: Number, default: 700 },
        easing: { type: String, default: "ease-in-out" },
        overflow: { type: Boolean, default: false }
    })

    const canToggle = ref(true)
    const reSlot = ref(null)
    const height = ref(0)

    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            height.value = getHeight(entry.target)
        }
    })

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

    watch(
        () => props.modelValue,
        (nue) => {
            if (canToggle.value) showHide(nue)
        }
    )

    const showHide = (show = true) => {
        canToggle.value = false
        if (show) {
            reSlot.value.style.visibility = "visible"
            reSlot.value.animate(
                { height: ["0", `${height.value}px`], opacity: [0, 1] },
                { duration: props.duration, easing: props.easing, fill: "forwards" }
            ).onfinish = () => {
                canToggle.value = true
            }
        } else {
            reSlot.value.animate(
                { height: [`${height.value}px`, 0], opacity: [1, 0] },
                { duration: props.duration, easing: props.easing, fill: "both" }
            ).onfinish = () => {
                emit("update:modelValue", false)
                reSlot.value.style.visibility = "hidden"
                canToggle.value = true
            }
        }
    }

    onMounted(() => {
        if (!props.modelValue) {
            reSlot.value.style.visibility = "hidden"
            reSlot.value.animate({ height: [0] }, { duration: 1, fill: "forwards" })
        }

        if (reSlot.value) resizeObserver.observe(reSlot.value)
    })

    onUnmounted(() => {
        if (resizeObserver && reSlot.value) resizeObserver.unobserve(reSlot.value)
    })
</script>

<template>
    <div ref="reSlot" :style="{ overflow: !props.modelValue && overflow ? 'hidden' : null }">
        <slot></slot>
    </div>
</template>
