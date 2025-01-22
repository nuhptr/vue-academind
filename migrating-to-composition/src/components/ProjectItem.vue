<script setup>
import { defineProps } from "vue"

const props = defineProps(["title"])
</script>

<style scoped>
li {
   @apply bg-[#00006b] text-white p-2 my-4;
}
</style>

<template>
   <li>
      <h3 class="m-0">{{ props.title }}</h3>
   </li>
</template>
