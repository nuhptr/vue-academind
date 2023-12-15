<script>
   import LearningResource from "./LearningResource.vue"

   export default {
      components: { LearningResource },
      inject: ["storedResources"],
   }
</script>

<template>
   <ul v-for="response in storedResources">
      <LearningResource :key="response.id" :data="response" />
   </ul>
</template>

<style>
   ul {
      list-style: none;
      padding: 0;
      margin: auto;
      max-width: 40rem;
   }
</style>
