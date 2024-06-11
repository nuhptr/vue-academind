<script setup>
import { inject } from "vue"

import KnowledgeElement from "./KnowledgeElement.vue"

const topics = inject("topics")
</script>

<template>
   <ul class="ul">
      <KnowledgeElement
         v-for="topic in topics"
         :key="topic.id"
         :id="topic.id"
         :topicName="topic.title"
         :description="topic.description"
      />
   </ul>
</template>
