<script setup>
import { ref, inject, onMounted, watch } from "vue"
import { useRoute } from "vue-router"

import UserItem from "@/components/users/UserItem.vue"

const teamName = ref("")
const members = ref([])

const users = inject("users")
const teams = inject("teams")
const route = useRoute()

const loadTeamMembers = () => {
   const teamId = route.params.teamId
   const selectedTeam = teams.value.find((team) => team.id === teamId)
   const members = selectedTeam.members

   const selectedMembers = []
   for (const member of members) {
      const user = users.value.find((user) => user.id === member)
      selectedMembers.push(user)
   }

   members.value = selectedMembers
   console.log(members.value)
   teamName.value = selectedTeam.name
}

onMounted(() => {
   loadTeamMembers()
})

watch(
   () => route.params.teamId,
   () => {
      loadTeamMembers()
   }
)

// // Navigation Guards
// onBeforeRouteUpdate((to, from, next) => {
//    console.log("beforeRouteUpdate TeamMembers")
//    console.log(to, from)
//    // this.loadTeamMembers(to.params.teamId)
//    // next()
// })
</script>

<style scoped>
/* Style goes here */
</style>

<template>
   <section class="max-w-[40rem] rounded-md p-4 mx-auto my-[2rem] shadow-md">
      <h2 class="mx-0 my-2">{{ teamName }}</h2>
      <ul class="p-0 m-0 list-none">
         <UserItem
            v-for="member in members"
            :key="member.id"
            :name="member.fullName"
            :role="member.role"
         />
      </ul>
   </section>
</template>
