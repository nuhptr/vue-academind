<script setup>
const props = defineProps(["title"])
</script>

<style scoped>
/* Style goes here */
</style>

<template>
    <section class="max-w-[30rem] mx-auto my-8 shadow-md p-4">
        <h2 class="mb-4 text-xl font-bold text-center">{{ props.title }}</h2>
        <slot></slot>
    </section>
</template>
