<script>
   import BaseBadge from "@/components/BaseBadge.vue"
   import BaseButton from "@/components/BaseButton.vue"
   import BaseCard from "@/components/BaseCard.vue"

   export default {
      components: { BaseCard, BaseButton, BaseBadge },
      props: ["id"],
      data() {
         return {
            selectedCoach: null,
         }
      },
      computed: {
         fullName() {
            return this.selectedCoach.firstName + " " + this.selectedCoach.lastName
         },
         contactLink() {
            return "/coaches/" + this.id + "/contact"
         },
         areas() {
            return this.selectedCoach.areas
         },
         rate() {
            return this.selectedCoach.hourlyRate
         },
         description() {
            return this.selectedCoach.description
         },
      },
      created() {
         this.selectedCoach = this.$store.getters["coaches/coaches"].find((coach) => coach.id === this.id)
      },
   }
</script>

<template>
   <section>
      <BaseCard>
         <h2>{{ fullName }}</h2>
         <h3>${{ rate }}/hour</h3>
      </BaseCard>
   </section>
   <section>
      <BaseCard>
         <header>
            <h2>Interested? Reach out now!</h2>
            <BaseButton link :to="contactLink">Contact</BaseButton>
         </header>

         <!-- Children View -->
         <RouterView />
      </BaseCard>
   </section>
   <section>
      <BaseCard>
         <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
         <p style="line-height: 2rem; letter-spacing: -0.2px">{{ description }}</p>
      </BaseCard>
   </section>
</template>
