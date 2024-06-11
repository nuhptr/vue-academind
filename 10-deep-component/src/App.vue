<script setup>
import { ref } from "vue"

import Header from "./components/ui/Header.vue"
import UserInfo from "./components/user/UserInfo.vue"
import BadgeList from "./components/badge/BadgeList.vue"
import CourseGoals from "./components/course/CourseGoals.vue"

const activeUser = ref({
   name: "Maximilian Schwarzmüller",
   description: "Site owner and admin",
   role: "admin",
})
</script>

<style>
/* Style goes here */
</style>

<template>
   <div>
      <Header></Header>
      <BadgeList></BadgeList>

      <UserInfo
         :fullName="activeUser.name"
         :infoText="activeUser.description"
         :role="activeUser.role"
      ></UserInfo>

      <CourseGoals #default="slotProps">
         <h2>{{ slotProps.item }}</h2>
         <p>{{ slotProps.anotherProp }}</p>
      </CourseGoals>
   </div>
</template>
