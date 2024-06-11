<script setup>
import CourseGoals from "./components/CourseGoals.vue"
</script>

<template>
   <course-goals></course-goals>
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
   max-width: 25rem;
   margin: 3rem auto;
   padding: 1rem;
   border-radius: 12px;
}

button {
   padding: 0.5rem 1.5rem;
   margin-right: 1rem;
   background-color: #1f001f;
   border: 1px solid #1f001f;
   color: white;
   font: inherit;
   cursor: pointer;

   &:hover,
   &:active {
      background-color: #750a75;
      border-color: #750a75;
   }
}
</style>
