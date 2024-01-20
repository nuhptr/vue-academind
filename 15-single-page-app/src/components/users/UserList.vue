<script>
import UserItem from "./UserItem.vue"

export default {
   components: { UserItem },
   inject: ["users"],
   methods: {
      confirmInput() {
         // do something
         this.$router.push("/teams")
      },
   },
   // navigation guards
   beforeRouteEnter(to, from, next) {
      console.log("beforeRouteEnter UsersList")
      console.log(to, from)
      next()
   },
   unmounted() {
      console.log("unmounted UsersList")
   },
}
</script>

<template>
   <button @click="confirmInput">Confirm</button>
   <ul>
      <UserItem v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role" />
   </ul>
</template>

<style>
ul {
   list-style: none;
   margin: 2rem auto;
   max-width: 20rem;
   padding: 0;
}
</style>
