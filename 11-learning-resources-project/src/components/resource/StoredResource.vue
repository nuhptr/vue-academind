<script>
   import LearningResource from "./LearningResource.vue"

   export default {
      components: { LearningResource },
      props: ["resources"],
   }
</script>

<template>
   <ul>
      <LearningResource v-for="response in resources" :key="response.id" :data="response" />
   </ul>
</template>

<style>
   ul {
      list-style: none;
      margin: 0;
      padding: 0;
      margin: auto;
      max-width: 40rem;
   }
</style>
