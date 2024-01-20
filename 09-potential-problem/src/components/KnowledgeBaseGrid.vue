<script>
   import KnowledgeElement from "./KnowledgeElement.vue"

   export default {
      components: { KnowledgeElement },
      inject: ["topics"],
   }
</script>

<template>
   <ul>
      <KnowledgeElement
         v-for="topic in topics"
         :key="topic.id"
         :id="topic.id"
         :topicName="topic.title"
         :description="topic.description" />
   </ul>
</template>
