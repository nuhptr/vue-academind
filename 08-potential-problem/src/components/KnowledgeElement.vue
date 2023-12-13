<script>
   export default {
      data() {
         return {}
      },
      // For inject data from parent component
      inject: ["selectTopic"],
      props: ["id", "topicName", "description"],
      // For emit data to parent component
      emits: ["selectTopic"],
   }
</script>

<template>
   <li>
      <h3>{{ topicName }}</h3>
      <p>{{ description }}</p>
      <button @click="selectTopic(id)">Learn More</button>
   </li>
</template>

<style></style>
