<script setup>
import { defineProps, computed } from "vue"

defineProps({ name: String, rating: String })

const ratingClass = computed(() => {
    switch (rating) {
        case "poor":
            return "text-red-600"
        case "average":
            return "text-indigo-600"
        case "great":
            return "text-green-600"
        default:
            return ""
    }
})
</script>

<style scoped>
/* Style goes here */
</style>

<template>
    <li class="p-4 mx-0 my-4 border border-zinc-100">
        <p class="text-base mx-0 my-[0.5rem]">
            <span class="font-bold">{{ name }}</span>
            rated the learning experience
            <span class="font-bold" :class="ratingClass">{{ rating }}</span>
            .
        </p>
    </li>
</template>
