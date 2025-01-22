<script setup>
const props = defineProps(["title"])
const emits = defineEmits(["close"])

const closeDialog = () => {
   emits("close")
}
</script>

<style scoped>
.backdrop {
   @apply fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-10;
}

dialog {
   @apply m-0 p-0 border-none rounded-[12px] shadow-md fixed top-[30vh] w-[30rem] bg-white z-[100] overflow-hidden left-[calc(50% - 15rem)];
}

header {
   @apply w-full p-4 bg-[#310131] text-white;
}

menu {
   @apply p-4 flex justify-end items-center;
}
</style>

<template>
   <div class="backdrop" @click="closeDialog"></div>
   <dialog open>
      <header>
         <h2>{{ props.title }}</h2>
      </header>

      <div class="p-4">
         <!-- children -->
         <slot></slot>
      </div>

      <menu>
         <button @click="closeDialog">Close</button>
      </menu>
   </dialog>
</template>
