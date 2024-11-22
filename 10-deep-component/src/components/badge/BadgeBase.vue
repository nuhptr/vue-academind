<script setup>
import { computed } from "vue"

const props = defineProps(["caption", "type"])

const classes = computed(() => {
    switch (props.type) {
        case "admin":
            return "text-white bg-orange-500"
        case "author":
            return "text-white bg-sky-500"
        default:
            return ""
    }
})
</script>

<style>
/* Style goes here */
</style>

<template>
    <span class="inline-block py-[0.5rem] px-4 rounded-xl" :class="classes">
        {{ caption }}
    </span>
</template>
