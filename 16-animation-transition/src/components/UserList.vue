<script>
   export default {
      data() {
         return {
            users: ["Max", "Anna", "Chris", "Manu", "Michael", "Angela"],
         }
      },
      methods: {
         addUser() {
            const enteredUsername = this.$refs.userNameInput.value
            if (enteredUsername === "") {
               return alert("Please enter a username")
            }

            this.users.unshift(enteredUsername)
            this.$refs.userNameInput.value = ""
         },
         removeUser(user) {
            this.users = this.users.filter((userIndex) => userIndex !== user)
         },
      },
   }
</script>

<template>
   <!-- Using transition group -->
   <TransitionGroup tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
   </TransitionGroup>
   <div>
      <input type="text" ref="userNameInput" style="margin-right: 1rem" />
      <button @click="addUser">Add User</button>
   </div>
</template>

<style scoped>
   ul {
      list-style: none;
      margin: 1rem 0;
      padding: 0;
   }

   li {
      border: 1px solid #ccc;
      padding: 1rem;
      text-align: center;
   }

   /* Special class for transition */
   .user-list-enter-from {
      opacity: 0;
      transform: translateX(-30px);
   }

   .user-list-enter-active {
      transition: all 1s ease-out;
   }

   .user-list-enter-to,
   .user-list-leave-from {
      opacity: 1;
      transform: translateX(0);
   }

   .user-list-leave-active {
      transition: all 1s ease-in;
      position: absolute;
   }

   .user-list-leave-to {
      opacity: 0;
      transform: translateX(30px);
   }

   /* Move css when item remove or added */
   .user-list-move {
      transition: transform 0.8s ease;
   }
</style>
