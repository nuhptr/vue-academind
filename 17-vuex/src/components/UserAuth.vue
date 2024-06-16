<script setup>
import { useStore } from "vuex"
import { computed } from "vue"

const store = useStore()

const login = () => {
   store.dispatch({ type: "login" })
}
const logout = () => {
   store.dispatch({ type: "logout" })
}

// from user module
const isAuth = computed(() => store.getters.userIsAuthenticated)
</script>

<template>
   <div class="flex items-center w-full gap-14">
      <p class="flex-1 tracking-tight text-black">
         User login is: <span class="font-bold uppercase">{{ isAuth }}</span>
      </p>
      <button
         class="flex-1 px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
         @click="login"
         v-if="!isAuth"
      >
         Login
      </button>
      <button
         class="flex-1 px-3 py-2 text-white rounded-md bg-rose-600 hover:bg-rose-700"
         @click="logout"
         v-if="isAuth"
      >
         Logout
      </button>
   </div>
</template>
