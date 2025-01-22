<script setup>
import { defineProps, defineEmits } from "vue"

// Props
const props = defineProps(["id", "userName"])
// Emit
const emit = defineEmits(["list-projects"])

const viewProjects = () => {
   // console.log(props.id, props.userName)
   emit("list-projects", props.id)
}
</script>

<style scoped>
li {
   @apply my-2 p-4 shadow-md border border-gray-300;
}
</style>

<template>
   <li>
      <h3 class="m-0">{{ userName }}</h3>
      <button @click="viewProjects">View Projects</button>
   </li>
</template>
