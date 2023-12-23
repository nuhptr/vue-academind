<script>
   import TeamsItem from "./TeamsItem.vue"

   export default {
      components: { TeamsItem },
      inject: ["teams"],
   }
</script>

<template>
   <ul>
      <TeamsItem v-for="team in teams" :key="team.id" :name="team.name" :memberCount="team.members.length" />
   </ul>
</template>

<style scoped>
   ul {
      list-style: none;
      margin: 2rem auto;
      max-width: 40rem;
      padding: 0;
   }
</style>
