<script setup>
import { inject } from "vue"

const props = defineProps(["id", "topicName", "description"])

// for inject data from parent component
const selectTopic = inject("selectTopic")

// Emit event to parent component
const emits = defineEmits(["selectTopic"])
</script>

<template>
   <li class="w-full li">
      <h3 class="mb-2 text-xl font-bold">{{ props.topicName }}</h3>
      <p class="mb-4 line-clamp-2">{{ props.description }}</p>
      <button @click="selectTopic(props.id)" class="button">Learn More</button>
   </li>
</template>
