<script setup>
import { defineProps, defineEmits } from "vue"

const props = defineProps(["searchTerm"])
const emit = defineEmits(["search"])

const search = (event) => {
   emit("search", event.target.value)
}
</script>

<style scoped>
input {
   @apply w-full block p-1 border border-[#ccc] focus:outline-none focus:border-[#00006b] focus:bg-[#f9f9f9];
}
</style>

<template>
   <form>
      <input type="search" @input="search" :value="props.searchTerm" placeholder="Filter items" />
   </form>
</template>
