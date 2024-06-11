<script setup>
import { inject } from "vue"

import LearningResource from "./LearningResource.vue"

const storedResources = inject("storedResources")
</script>

<style>
/* Style goes here */
</style>

<template>
   <ul class="list-none p-0 m-auto max-w-[40rem]" v-for="dataResource in storedResources">
      <LearningResource :key="dataResource.id" :data="dataResource" />
   </ul>
</template>
