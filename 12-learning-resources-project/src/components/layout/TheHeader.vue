<script setup>
defineProps({
   title: { type: String, required: true },
})
</script>

<style>
/* Style goes here */
</style>

<template>
   <header class="w-full h-[5rem] bg-[#3a0061] flex justify-center items-center">
      <h1 class="m-0 text-white">{{ title }}</h1>
   </header>
</template>
