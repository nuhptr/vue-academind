<script setup>
import { computed } from "vue"

const props = defineProps(["type", "title"])

const text = computed(() => props.title.toUpperCase())
</script>

<style scoped>
.frontend {
   @apply bg-[#3d008d] text-white;
}

.backend {
   @apply bg-[#71008d] text-white;
}

.career {
   @apply bg-[#8d006e] text-white;
}
</style>

<template>
   <span
      class="inline-block px-6 py-2 mr-2 bg-zinc-300 text-zinc-600 rounded-3xl"
      :class="props.type"
   >
      {{ text }}
   </span>
</template>
