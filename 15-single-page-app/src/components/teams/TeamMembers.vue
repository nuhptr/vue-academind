<script>
import UserItem from "../users/UserItem.vue"

export default {
   components: { UserItem },
   inject: ["users", "teams"],
   data() {
      return {
         teamName: "",
         members: [],
      }
   },
   methods: {
      loadTeamMembers(route) {
         const teamId = route.params.teamId
         const selectedTeam = this.teams.find((team) => team.id === teamId)
         const members = selectedTeam.members

         const selectedMembers = []
         for (const member of members) {
            const user = this.users.find((user) => user.id === member)
            selectedMembers.push(user)
         }

         this.members = selectedMembers
         this.teamName = selectedTeam.name
      },
   },
   created() {
      //* this is for get the team id from the url
      this.loadTeamMembers(this.$route)
   },
   // navigation guards
   beforeRouteUpdate(to, from, next) {
      console.log("beforeRouteUpdate TeamMembers")
      console.log(to, from)
      // this.loadTeamMembers(to.params.teamId)
      next()
   },
   watch: {
      $route(newRoute) {
         this.loadTeamMembers(newRoute)
         console.log(this.$route.query)
      },
   },
}
</script>

<template>
   <section>
      <h2>{{ teamName }}</h2>
      <ul>
         <UserItem v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role" />
      </ul>
   </section>
</template>

<style scoped>
section {
   max-width: 40rem;
   border-radius: 12px;
   padding: 1rem;
   margin: 2rem auto;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

h2 {
   margin: 0.5rem 0;
}

ul {
   list-style: none;
   margin: 0;
   padding: 0;
}
</style>
