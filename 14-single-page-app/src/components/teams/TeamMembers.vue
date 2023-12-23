<script>
   import UserItem from "../users/UserItem.vue"

   export default {
      components: { UserItem },
      data() {
         return {
            teamName: "Test",
            members: [
               { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
               { id: "u2", fullName: "Max Schwarz", role: "Engineer" },
            ],
         }
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
