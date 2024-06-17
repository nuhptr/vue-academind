<script setup>
import ControlCenter from "@/components/ControlCenter.vue"
import TheCounter from "@/components/TheCounter.vue"
</script>

<style>
.container {
   @apply mx-auto my-[3rem] max-w-[30rem] rounded-[12px] shadow-md p-4 text-center;
}
</style>

<template>
   <the-counter></the-counter>
   <control-center></control-center>
</template>
