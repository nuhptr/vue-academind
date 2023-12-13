<script>
   import BadgeBase from "./BadgeBase.vue"

   export default {
      components: { BadgeBase },
      props: ["fullName", "infoText", "role"],
   }
</script>

<template>
   <section>
      <div>
         <h3>{{ fullName }}</h3>
         <BadgeBase :type="role" :caption="role.toUpperCase()" />
      </div>
      <p>{{ infoText }}</p>
   </section>
</template>

<style scoped>
   section {
      margin: 2rem auto;
      max-width: 30rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      padding: 1rem;

      & div {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
   }
</style>
