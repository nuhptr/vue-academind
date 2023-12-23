<script>
   export default {
      props: ["name", "role"],
      computed: {
         roleClass() {
            if (this.role === "Engineer") {
               return "role--engineer"
            }
            if (this.role === "Consultant") {
               return "role--consultant"
            }
            return null
         },
      },
   }
</script>

<template>
   <li>
      <h3>{{ name }}</h3>
      <div class="role" :class="roleClass">
         {{ role }}
      </div>
   </li>
</template>

<style scoped>
   li {
      margin: 1rem 0;
      border: 1px solid #ccc;
      padding: 1rem;
   }

   h3 {
      margin: 0.5rem 0;
   }

   .role {
      display: inline-block;
      border-radius: 40px;
      padding: 0.25rem 1rem;
      color: #252525;
      background-color: #ccc;
   }

   .role--engineer {
      background-color: blue;
      color: white;
   }

   .role--consultant {
      background-color: #af003a;
      color: white;
   }
</style>
