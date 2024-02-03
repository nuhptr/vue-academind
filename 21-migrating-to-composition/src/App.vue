<template>
   <main>
      <user-list :users="activeUsers" @list-projects="selectUser" />
      <projects-list :user="selectedUser" />
   </main>
</template>

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
   * {
      box-sizing: border-box;
   }
   html {
      font-family: sans-serif;
   }
   body {
      margin: 0;
   }

   main {
      display: flex;
      justify-content: space-around;
   }

   button {
      font: inherit;
      border: 1px solid #00006b;
      background-color: transparent;
      color: #00006b;
      padding: 0.5rem 1.5rem;
      cursor: pointer;
      margin: 0.5rem 0.5rem 0.5rem 0;

      &:hover,
      &:active {
         background-color: #efefff;
      }

      &.selected {
         background-color: #00006b;
         color: white;
      }
   }
</style>
