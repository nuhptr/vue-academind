<script setup>
import { ref, provide, onMounted } from "vue"

import ActiveElement from "./components/ActiveElement.vue"
import KnowledgeBase from "./components/KnowledgeBase.vue"

const topics = ref([
   {
      id: "basics",
      title: "The Basics",
      description: "Core Vue basics you have to know",
      fullText:
         "Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!",
   },
   {
      id: "components",
      title: "Components",
      description: "Components are a core concept for building Vue UIs and apps",
      fullText:
         "With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.",
   },
])
const activeTopic = ref(null)

const activateTopic = (topicId) => {
   activeTopic.value = topics.value.find((topic) => topic.id === topicId)
}

// Dependency injection
provide("topics", topics)
provide("selectTopic", activateTopic)

// Hooks (lifecycle)
onMounted(() => {
   setTimeout(() => {
      topics.value.push({
         id: "new",
         title: "New Topic",
         description: "This is a new topic",
         fullText: "This is a new topic that was added dynamically!",
      })
   }, 3000)
})
</script>

<template>
   <div>
      <ActiveElement
         :topicTitle="activeTopic && activeTopic.title"
         :text="activeTopic && activeTopic.fullText"
      />
      <KnowledgeBase />
   </div>
</template>
