<script>
   export default {
      props: ["type", "caption"],
      computed: {
         classes() {
            return {
               badge__admin: this.type === "admin",
               badge__author: this.type === "author",
            }
         },
      },
   }
</script>

<template>
   <span class="badge" :class="classes"> {{ caption }} </span>
</template>

<style scoped>
   .badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 30px;
      background-color: #ccc;
      color: #2e2e2e;
      &.badge__admin {
         background-color: #810036;
         color: white;
      }
      &.badge__author {
         background-color: #002c8a;
         color: white;
      }
   }
</style>
