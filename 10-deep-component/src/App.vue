<script>
   import Header from "./components/Header.vue"
   import UserInfo from "./components/UserInfo.vue"
   import BadgeList from "./components/BadgeList.vue"
   import CourseGoals from "./components/goals/CourseGoals.vue"

   export default {
      components: { UserInfo, Header, BadgeList, CourseGoals },
      data() {
         return {
            activeUser: { name: "Maximilian Schwarzmüller", description: "Site owner and admin", role: "admin" },
         }
      },
   }
</script>

<template>
   <div>
      <Header />
      <BadgeList />
      <UserInfo :fullName="activeUser.name" :infoText="activeUser.description" :role="activeUser.role" />
      <CourseGoals #default="slotProps">
         <h2>{{ slotProps.item }}</h2>
         <p>{{ slotProps.anotherProp }}</p>
      </CourseGoals>
   </div>
</template>

<style>
   html {
      font-family: sans-serif;
   }

   body {
      margin: 0;
   }
</style>
