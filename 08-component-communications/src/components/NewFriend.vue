<script setup>
import { ref } from "vue"

const enteredName = ref("")
const enteredPhone = ref("")
const enteredEmail = ref("")

const emit = defineEmits(["addContact"])

const submitData = () => {
   const contactData = {
      name: enteredName.value,
      phone: enteredPhone.value,
      email: enteredEmail.value,
   }

   emit("addContact", contactData)
   enteredName.value = ""
   enteredPhone.value = ""
   enteredEmail.value = ""
}
</script>

<style>
/* Style goes here */
</style>

<template>
   <!-- For submit and preventDefault() window screen -->
   <form
      @submit.prevent="submitData"
      class="max-w-[40rem] w-full lg:w-[90%] py-10 px-8 flex flex-col items-start gap-y-6 mx-auto rounded-md text-center shadow-md"
   >
      <div class="flex items-center justify-center w-full gap-10 max-sm:gap-4">
         <label for="name">Name</label>
         <input
            type="text"
            v-model="enteredName"
            class="flex-1 px-3 py-2 rounded-md bg-slate-100 focus:bg-slate-200 focus:outline-none"
         />
      </div>

      <div class="flex items-center justify-center w-full gap-10 max-sm:gap-4">
         <label for="phone">Phone</label>
         <input
            type="tel"
            v-model="enteredPhone"
            class="flex-1 px-3 py-2 rounded-md bg-slate-100 focus:bg-slate-200 focus:outline-none"
         />
      </div>

      <div class="flex items-center justify-center w-full gap-10 max-sm:gap-4">
         <label for="email">E-Mail</label>
         <input
            type="email"
            v-model="enteredEmail"
            class="flex-1 px-3 py-2 rounded-md bg-slate-100 focus:bg-slate-200 focus:outline-none"
         />
      </div>

      <button class="button !bg-indigo-600 hover:!bg-indigo-700 !py-3 w-full">Add Contact</button>
   </form>
</template>
