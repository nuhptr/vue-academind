<script setup>
import { ref } from "vue"

// props define
defineProps({
   id: { type: String, required: true },
   name: { type: String, required: true },
   phoneNumber: { type: String, required: true },
   emailAddress: { type: String, required: true },
   isFavorite: { type: Boolean, required: false, default: false /** , validator: fn() */ },
})

// emits define
const emit = defineEmits(["toogleFavorite", "deleteFriend"])

const detailsAreVisible = ref(false)

const toogleFavorite = () => {
   emit("toogleFavorite", id)
}

const deleteFriend = () => {
   emit("deleteFriend", id)
}

const toggleDetails = () => {
   detailsAreVisible.value = !detailsAreVisible.value
}
</script>

<style>
/* Style goes here */
</style>

<template>
   <li
      class="max-w-[40rem] w-full lg:w-[90%] px-4 py-8 mb-4 mx-auto rounded-md text-center shadow-md"
   >
      <h2 class="pb-4 mb-4 text-xl border-b">{{ name }} {{ isFavorite ? "- (Favorite)" : "" }}</h2>

      <button class="mr-5 button" @click="toogleFavorite">Is favorite</button>
      <button class="button !bg-orange-500 hover:!bg-orange-600" @click="toggleDetails">
         {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <button class="button !bg-rose-500 hover:!bg-rose-600 ml-5" @click="deleteFriend">
         Delete
      </button>

      <ul class="flex items-center justify-center my-4 gap-x-4" v-if="detailsAreVisible">
         <li><strong>Phone:</strong> {{ phoneNumber }}</li>
         <li><strong>Email:</strong> {{ emailAddress }}</li>
      </ul>
   </li>
</template>
