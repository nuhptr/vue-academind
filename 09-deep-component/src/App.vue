<script>
   import TheHeader from "./components/TheHeader.vue"
   import BadgeList from "./components/BadgeList.vue"
   import UserInfo from "./components/UserInfo.vue"

   export default {
      components: { UserInfo, TheHeader, BadgeList, UserInfo },
      data() {
         return {
            activeUser: {
               name: "Maximilian Schwarzmüller",
               description: "Site owner and admin",
               role: "admin",
            },
         }
      },
   }
</script>

<template>
   <div>
      <TheHeader />
      <BadgeList />
      <UserInfo :fullName="activeUser.name" :infoText="activeUser.description" :role="activeUser.role" />
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
