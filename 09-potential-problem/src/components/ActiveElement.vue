<script setup>
defineProps({ topicTitle: String, text: String })
</script>

<template>
    <section class="section">
        <h2 class="h2">{{ topicTitle }}</h2>
        <p class="leading-[160%]">{{ text }}</p>
    </section>
</template>
