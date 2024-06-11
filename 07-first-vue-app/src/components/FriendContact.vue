<script setup>
import { ref } from "vue"

defineProps({ id: String, name: String, phone: String, email: String })

const dataAreVisible = ref(false)

const toggleDetails = () => {
   dataAreVisible.value = !dataAreVisible.value
}
</script>

<template>
   <li
      class="max-w-[40rem] w-[90%] my-4 mx-auto flex flex-col items-center gap-y-4 p-5 rounded-[10px] shadow-lg"
      :key="id"
   >
      <h2 class="text-lg tracking-tight uppercase">{{ name }}</h2>
      <button
         @click="toggleDetails"
         class="px-4 py-2 text-white border border-solid shadow-md cursor-pointer rounded-md bg-emerald-500 w-fit hover:bg-emerald-600 hover:shadow-lg"
         :class="{ 'bg-red-500 hover:bg-rose-700': dataAreVisible }"
      >
         {{ dataAreVisible ? "Hide" : "Show" }} Details
      </button>

      <ul v-if="dataAreVisible" class="flex flex-col gap-y-1">
         <li><strong>Phone:</strong> {{ phone }}</li>
         <li><strong>Email:</strong> {{ email }}</li>
      </ul>
   </li>
</template>

<style scoped>
button {
   font: inherit;
}
</style>
