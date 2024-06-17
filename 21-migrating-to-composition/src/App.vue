<script setup>
import { ref } from "vue"

import UserList from "@/components/UserList.vue"
import ProjectsList from "@/components/ProjectsList.vue"

import USER_DATA from "./dummy-data"

let selectedUser = ref(null)
let activeUsers = ref(USER_DATA)

// function to select a user
function selectUser(uid) {
   selectedUser.value = activeUsers.value.find((user) => user.id === uid)
}
</script>

<style>
button {
   @apply bg-transparent text-[#00006b] py-2 px-6 cursor-pointer m-2 ml-0 hover:bg-[#efefff] active:bg-[#efefff];

   &.selected {
      @apply bg-[#00006b] text-white;
   }
}
</style>

<template>
   <main>
      <user-list :users="activeUsers" @list-projects="selectUser" />
      <projects-list :user="selectedUser" />
   </main>
</template>
