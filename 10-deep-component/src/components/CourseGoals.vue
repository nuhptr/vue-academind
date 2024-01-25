<script>
   export default {
      data() {
         return { goals: ["Finish the course", "Learn Vue!"] }
      },
   }
</script>

<template>
   <ul>
      <li v-for="goal in goals" :key="goal">
         <slot :item="goal" anotherProp="..." />
      </li>
   </ul>
</template>

<style>
   ul {
      list-style: none;
      margin: 0;
      padding: 0;
   }
</style>
