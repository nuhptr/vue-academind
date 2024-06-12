<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from "vue-router"
import { inject, onUnmounted, ref } from "vue"

import UserItem from "../components/users/UserItem.vue"

const changesSaved = ref(false)

const users = inject("users")
const router = useRouter()

const confirmInput = () => {
   // do something
   router.push("/teams")
}

const saveChanges = () => {
   changesSaved.value = true
}

onUnmounted(() => {
   console.log("unmounted UsersList")
})

beforeRouteEnter((to, from, next) => {
   console.log("beforeRouteUpdate UsersList")
   console.log(to, from)

   next()
})

// navigation guards
onBeforeRouteLeave((to, from, next) => {
   console.log("beforeRouteLeave UsersList")
   console.log(to, from)

   if (changesSaved.value) next()
   else {
      const userWantToExit = confirm("Are you sure? You got unsaved changes!")
      next(userWantToExit)
   }
})
</script>

<style>
/* Styles */
</style>

<template>
   <button @click="confirmInput">Confirm</button>
   <button @click="saveChanges">Save Changes</button>
   <ul class="list-none mx-auto my-8 max-w-[20rem] p-0">
      <UserItem v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role" />
   </ul>
</template>
