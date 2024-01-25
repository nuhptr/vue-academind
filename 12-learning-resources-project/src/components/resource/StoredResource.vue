<script>
   import LearningResource from "./LearningResource.vue"

   export default {
      components: { LearningResource },
      inject: ["storedResources"],
   }
</script>

<template>
   <ul v-for="data in storedResources">
      <LearningResource :key="data.id" :data="data" />
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
