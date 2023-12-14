<script>
   import Header from "./components/Header.vue"
   // import CourseGoals from "./components/CourseGoals.vue"
   import ActiveGoals from "./components/ActiveGoals.vue"
   import ManageGoals from "./components/ManageGoals.vue"

   export default {
      components: { Header, ActiveGoals, ManageGoals },
      data() {
         return {}
      },
   }
</script>

<template>
   <Header />
   <ActiveGoals />
   <ManageGoals />
</template>

<style>
   html {
      font-family: sans-serif;
   }
   body {
      margin: 0;
   }
</style>
