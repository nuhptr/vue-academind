<script>
   import BaseBadge from "./BaseBadge.vue"
   import BaseButton from "./BaseButton.vue"

   export default {
      components: { BaseButton, BaseBadge },
      props: ["id", "firstName", "lastName", "areas", "rate"],
      computed: {
         fullName() {
            return this.firstName + " " + this.lastName // "Maximilian Schwarzmüller"
         },
         coachContactLink() {
            return this.$route.path + "/" + this.id + "/contact" // /coaches/c1/contact
         },
         coachDetailsLink() {
            return this.$route.path + "/" + this.id // /coaches/c1
         },
      },
   }
</script>

<template>
   <li>
      <h3>{{ fullName }}</h3>
      <h4>${{ rate }}/hour</h4>
      <div>
         <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
      </div>
      <div class="actions">
         <BaseButton link mode="outline" :to="coachContactLink">Contact</BaseButton>
         <BaseButton link :to="coachDetailsLink">View Details</BaseButton>
      </div>
   </li>
</template>

<style scoped>
   li {
      margin: 1rem 0;
      border: 1px solid #424242;
      border-radius: 12px;
      padding: 1rem;
   }

   h3 {
      font-size: 1.5rem;
   }

   h3,
   h4 {
      margin: 0.5rem 0;
   }

   div {
      margin: 1.2rem 0;
   }

   .actions {
      display: flex;
      justify-content: flex-end;
   }
</style>
