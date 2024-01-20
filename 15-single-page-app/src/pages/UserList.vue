<script>
import UserItem from "../components/users/UserItem.vue"

export default {
   components: { UserItem },
   inject: ["users"],
   data() {
      return { changesSaved: false }
   },
   methods: {
      confirmInput() {
         // do something
         this.$router.push("/teams")
      },
      saveChanges() {
         this.changesSaved = true
      }
   },
   // navigation guards
   beforeRouteEnter(to, from, next) {
      console.log("beforeRouteEnter UsersList")
      console.log(to, from)
      next()
   },
   // navigation guards
   beforeRouteLeave(to, from, next) {
      console.log("beforeRouteLeave UsersList")
      console.log(to, from)
      if (this.changesSaved) {
         next()
      } else {
         const userWantToExit = confirm("Are you sure? You got unsaved changes!")
         next(userWantToExit)
      }
   },
   unmounted() {
      console.log("unmounted UsersList")
   },
}
</script>

<template>
   <button @click="confirmInput">Confirm</button>
   <button @click="saveChanges">Save Changes</button>
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
