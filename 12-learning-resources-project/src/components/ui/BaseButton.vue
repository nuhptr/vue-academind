<script setup>
import { computed } from "vue"

const props = defineProps(["mode"])

const flatComputedClasses = computed(() => {
   return {
      "bg-transparent border-none text-[#3a0061] hover:bg-[#edd2ff] active:bg-[#edd2ff]":
         props.mode === "flat",
      "text-white": props.mode !== "flat",
   }
})
</script>

<style scoped>
/* Style goes here */
button {
   font-family: inherit;
}
</style>

<template>
   <button
      class="py-[0.75rem] px-[1.5rem] bg-[#3a0061] border border-[#3a0061] cursor-pointer hover:bg-[#5a189a] hover:border-[#5a189a]"
      :class="flatComputedClasses"
   >
      <!-- Children -->
      <slot></slot>
   </button>
</template>
