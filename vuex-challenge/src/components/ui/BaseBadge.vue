<script setup>
const props = defineProps(["mode", "noMarginLeft"])
</script>

<style scoped>
.badge--highlight {
    @apply bg-amber-50 border border-amber-200 text-amber-700;
}

.badge--elegant {
    @apply bg-violet-50 border border-violet-200 text-violet-700;
}
</style>

<template>
    <span
        class="inline-block py-[0.15rem] px-5 bg-gray-200 text-gray-600 my-0 mx-3 rounded-3xl"
        :class="['badge--' + props.mode, { 'ml-0': props.noMarginLeft }]"
    >
        <!-- Children -->
        <slot></slot>
    </span>
</template>
