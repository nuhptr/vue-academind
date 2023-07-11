<script>
import UserData from "./components/UserData.vue";
import ActiveUser from "./components/ActiveUser.vue";

export default {
   components: {
      UserData,
      ActiveUser,
   },
   data() {
      return {
         user: {
            name: "Maximilian",
            age: 27,
         },
      };
   },
   methods: {
      setUserData(name, age) {
         this.user.name = name;
         this.user.age = +age;
      },
   },
};
</script>

<template>
   <div class="app">
      <ActiveUser :username="user.name" :userage="user.age" />
      <UserData @set-data="setUserData" />
   </div>
</template>
