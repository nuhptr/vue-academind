<script setup>
import { computed } from "vue"

const props = defineProps(["name", "role"])

const roleClass = computed(() => {
    if (props.role === "Engineer") return "bg-blue-700 text-white"
    if (props.role === "Consultant") return "bg-rose-700 text-white"
    return null
})
</script>

<style scoped>
/* Add your styles here */
</style>

<template>
    <li class="p-4 mx-0 my-4 border border-zinc-200">
        <h3 class="mx-0 my-2">{{ props.name }}</h3>
        <div class="inline-block px-4 py-1 rounded-3xl" :class="roleClass">
            {{ props.role }}
        </div>
    </li>
</template>
