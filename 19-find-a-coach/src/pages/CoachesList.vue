<script>
   import CoachItem from "@/components/CoachItem.vue"
   import BaseCard from "@/components/BaseCard.vue"
   import BaseButton from "@/components/BaseButton.vue"
   import CoachFilter from "@/components/CoachFilter.vue"

   export default {
      components: { CoachItem, BaseCard, BaseButton, CoachFilter },
      data() {
         return {
            activeFilters: { frontend: true, backend: true, career: true },
         }
      },
      computed: {
         filteredCoaches() {
            const coaches = this.$store.getters["coaches/coaches"]
            return coaches.filter((coach) => {
               if (this.activeFilters.frontend && !coach.areas.includes("frontend")) {
                  return true
               }
               if (this.activeFilters.backend && !coach.areas.includes("backend")) {
                  return true
               }
               if (this.activeFilters.career && !coach.areas.includes("career")) {
                  return true
               }
               return false
            })
         },
         hasCoaches() {
            return this.$store.getters["coaches/hasCoaches"]
         },
      },
      methods: {
         setFilter(updatedFilters) {
            this.activeFilters = updatedFilters
         },
      },
   }
</script>

<template>
   <section>
      <CoachFilter @change-filter="setFilter" />
   </section>
   <section>
      <BaseCard>
         <div class="controls">
            <BaseButton mode="outline">Refresh</BaseButton>
            <BaseButton to="/register" link>Register as Coach</BaseButton>
         </div>
         <ul v-if="hasCoaches">
            <CoachItem
               v-for="coach in filteredCoaches"
               :key="coach.id"
               :id="coach.id"
               :firstName="coach.firstName"
               :lastName="coach.lastName"
               :rate="coach.hourlyRate"
               :areas="coach.areas" />
         </ul>
         <h3 v-else>No coaches found.</h3>
      </BaseCard>
   </section>
</template>

<style scoped>
   ul {
      list-style: none;
      margin: 0;
      padding: 0;
   }

   .controls {
      display: flex;
      justify-content: space-between;
   }
</style>
