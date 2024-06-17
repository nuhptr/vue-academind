<script setup>
import { Teleport, Transition } from "vue"

const props = defineProps({
   show: { type: Boolean, required: true },
   title: { type: String, required: false },
   fixed: { type: Boolean, required: false, default: false },
})

const emit = defineEmits(["close"])

const tryClose = () => {
   if (props.fixed) return
   emit("close")
}
</script>

<style scoped>
.dialog-enter-from,
.dialog-leave-to {
   @apply opacity-0 scale-[.8];
}

.dialog-enter-active {
   @apply transition-all duration-300 ease-out;
}

.dialog-leave-active {
   @apply transition-all duration-300 ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
   @apply opacity-100 scale-100;
}
</style>

<template>
   <Teleport to="body">
      <div
         v-if="props.show"
         @click="tryClose"
         class="fixed top-0 left-0 z-10 w-full h-screen bg-black/75"
      ></div>

      <Transition name="dialog">
         <dialog
            open
            v-if="props.show"
            class="fixed top-[20dvh] left-[10%] md:left-[calc(50% - 20rem)] w-[80%] md:w-[40rem] z-[100] rounded-xl border-none shadow-md p-0 m-0 overflow-hidden bg-white"
         >
            <header class="bg-[#3a0061] text-white w-full p-4">
               <!-- children -->
               <slot name="header">
                  <h2 class="m-0">{{ props.title }}</h2>
               </slot>
            </header>

            <section class="p-4">
               <!-- children -->
               <slot></slot>
            </section>

            <menu v-if="!props.fixed" class="flex justify-end p-4 m-0">
               <!-- children -->
               <slot name="actions">
                  <base-button @click="tryClose">Close</base-button>
               </slot>
            </menu>
         </dialog>
      </Transition>
   </Teleport>
</template>
