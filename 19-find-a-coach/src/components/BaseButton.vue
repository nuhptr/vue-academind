<script setup>
import { RouterLink } from "vue-router"

const props = defineProps({
    mode: { type: String, required: false, default: null },
    link: { type: Boolean, required: false, default: false },
    to: { type: String, required: false, default: "/" },
})
</script>

<style scoped>
button,
a {
    @apply bg-[#3a0061] text-white px-6 py-3 rounded-3xl mr-2 inline-block cursor-pointer hover:bg-[#270041] transition-colors duration-300 ease-in-out active:bg-[#270041];
}

.flat {
    @apply bg-transparent text-[#3a0061] border-none hover:bg-[#edd2ff] active:bg-[#edd2ff];
}

.outline {
    @apply bg-transparent border border-[#270041] text-[#270041] hover:bg-[#edd2ff] active:bg-[#edd2ff];
}
</style>

<template>
    <button v-if="!props.link" :class="props.mode">
        <slot></slot>
    </button>
    <RouterLink v-else :to="props.to" :class="props.mode">
        <slot></slot>
    </RouterLink>
</template>
