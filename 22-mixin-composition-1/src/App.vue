<script setup>
import AddUser from "@/components/AddUser.vue"
import DeleteUser from "@/components/DeleteUser.vue"
</script>

<style>
section {
   @apply mx-auto my-[2rem] border border-[#ccc] rounded-[12px] p-4;
}

button {
   @apply bg-[#310131] border border-[#310131] rounded-[8px] text-white px-6 py-2 cursor-pointer hover:bg-[#770e77] hover:border-[#770e77] transition-all duration-300 ease-in-out;
}
</style>

<template>
   <main>
      <add-user></add-user>
      <delete-user></delete-user>
   </main>
</template>
