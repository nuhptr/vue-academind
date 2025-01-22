<script setup>
import { computed } from "vue"

const props = defineProps(["email", "message"])

const emailLink = computed(() => {
    return "mailto:" + props.email
})
</script>

<style scoped>
/* Add this to the end of the existing styles */
</style>

<template>
    <li class="my-4 border border-[#ccc] p-4">
        <div>
            <a
                class="text-[#3d008d] font-bold hover:text-[#8d007a] active:text-[#8d007a]"
                :href="emailLink"
            >
                {{ email }}
            </a>
        </div>
        <p class="mt-2">{{ message }}</p>
    </li>
</template>
