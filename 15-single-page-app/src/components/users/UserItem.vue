<script setup>
import { computed } from "vue"

const props = defineProps(["name", "role"])

const roleClass = computed(() => {
   if (props.role === "Engineer") return "role--engineer"
   if (props.role === "Consultant") return "role--consultant"
   return null
})
</script>

<style scoped>
.role--engineer {
   @apply bg-blue-700 text-white;
}

.role--consultant {
   @apply bg-rose-700 text-white;
}
</style>

<template>
   <li class="p-4 mx-0 my-4 border border-zinc-200">
      <h3 class="mx-0 my-2">{{ props.name }}</h3>
      <div class="inline-block px-4 py-1 rounded-3xl text-[#252525] bg-zinc-100" :class="roleClass">
         {{ props.role }}
      </div>
   </li>
</template>
