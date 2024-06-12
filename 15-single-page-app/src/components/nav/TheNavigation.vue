<!-- <script>
   export default {
      emits: ["setPage"],
      methods: {
         setActivePage(page) {
            this.$emit("setPage", page)
         },
      },
   }
</script> -->

<style scoped>
a {
   text-decoration: none;
   font: inherit;
}
</style>

<template>
   <header class="w-full h-[5rem] bg-[#11005c]">
      <nav class="h-full">
         <ul class="flex items-center justify-center h-full p-0 mx-auto my-0 list-none">
            <li class="mx-[2rem] my-0">
               <!-- <button @click="setActivePage('teamsList')">Teams</button> -->
               <!-- RouterLink same as a tag -->
               <RouterLink
                  class="inline-block px-6 py-2 text-white bg-transparent border border-transparent cursor-pointer hover:text-amber-500 hover:border-amber-500 active:text-amber-500 active:border-amber-500"
                  to="/teams"
                  active-class="text-amber-500 border-amber-500"
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
                  active-class="text-amber-500 border-amber-500"
               >
                  Users
               </RouterLink>
            </li>
         </ul>
      </nav>
   </header>
</template>
