<script setup>
import { inject } from "vue"

import TeamsItem from "../components/teams/TeamsItem.vue"

const teams = inject("teams")
</script>

<style scoped>
/* Add your styles here */
</style>

<template>
   <RouterView />
   <ul class="mx-auto my-8 list-none max-w-[40rem] p-0">
      <TeamsItem
         v-for="team in teams"
         :key="team.id"
         :id="team.id"
         :name="team.name"
         :memberCount="team.members.length"
      />
   </ul>
</template>
