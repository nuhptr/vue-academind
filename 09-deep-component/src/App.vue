<script>
   import Header from "./components/Header.vue"
   import BadgeList from "./components/BadgeList.vue"
   import UserInfo from "./components/UserInfo.vue"

   export default {
      components: { UserInfo, Header, BadgeList, UserInfo },
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
      <Header />
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
