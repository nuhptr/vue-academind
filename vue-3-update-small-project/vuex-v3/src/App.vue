<script setup>
import UserList from "./components/UserList.vue"
import UserRegistration from "./components/UserRegistration.vue"
</script>

<template>
   <div id="app">
      <user-list></user-list>
      <user-registration></user-registration>
   </div>
</template>

<style>
* {
   box-sizing: border-box;
   font-family: sans-serif;
}

body {
   margin: 0;
}

.container {
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
   max-width: 20rem;
   margin: 3rem auto;
   padding: 1rem;
   border-radius: 12px;
}
</style>
