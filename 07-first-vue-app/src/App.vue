<script setup>
import { ref } from "vue"
import FriendContact from "./components/FriendContact.vue"

const friends = ref([
   { id: "manuel", name: "Manuel Lorenz", phone: "01234 5678 991", email: "manuel@gmail.com" },
   { id: "julie", name: "Julie Jones", phone: "09876 543 221", email: "julise@gmail.com" },
])
</script>

<template>
   <section>
      <header
         class="max-w-[40rem] w-[90%] mx-auto my-[2rem] p-6 flex items-center justify-center text-white rounded-[10px] bg-emerald-500 shadow-md"
      >
         <h2 class="text-[2rem] text-white">My Friends</h2>
      </header>
      <ul class="list-none" v-for="friend in friends">
         <FriendContact
            :id="friend.id"
            :name="friend.name"
            :phone="friend.phone"
            :email="friend.email"
         />
      </ul>
   </section>
</template>

<style>
/* Style goes here */
</style>
