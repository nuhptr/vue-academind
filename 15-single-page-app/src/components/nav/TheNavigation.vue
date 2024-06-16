<script setup>
import { useRouter } from "vue-router"
import { computed, ref } from "vue"
// const emits = defineEmits(["setPage"])

// const setActivePage = (page) => {
//    emit("setPage", page)
// }

const router = useRouter()

const teamActiveClass = computed(() => {
   return router.currentRoute.value.name === "teams"
      ? "text-amber-500 bg-amber-500 hover:text-white"
      : ""
})

const userActiveClass = computed(() => {
   return router.currentRoute.value.name === "users"
      ? "text-amber-500 bg-amber-500 hover:text-white"
      : ""
})
</script>

<style scoped>
a {
   text-decoration: none;
   font: inherit;
}
</style>

<template>
   <header class="w-full h-[5rem] bg-blue-600">
      <nav class="h-full">
         <ul class="flex items-center justify-center h-full p-0 mx-auto my-0 list-none">
            <li class="mx-[2rem] my-0">
               <!-- <button @click="setActivePage('teamsList')">Teams</button> -->
               <!-- RouterLink same as a tag -->
               <RouterLink
                  class="inline-block px-6 py-2 text-white bg-transparent border border-transparent cursor-pointer hover:text-amber-500 hover:border-amber-500 active:text-amber-500 active:border-amber-500"
                  to="/teams"
                  :class="teamActiveClass"
               >
                  Teams
               </RouterLink>
            </li>
            <li class="mx-[2rem] my-0">
               <!-- <button @click="setActivePage('usersList')">Users</button> -->
               <!-- RouterLink same as a tag -->
               <RouterLink
                  class="inline-block px-6 py-2 text-white bg-transparent border border-transparent cursor-pointer hover:text-amber-500 hover:border-amber-500 active:text-amber-500 active:border-amber-500"
                  to="/users"
                  :class="userActiveClass"
               >
                  Users
               </RouterLink>
            </li>
         </ul>
      </nav>
   </header>
</template>
