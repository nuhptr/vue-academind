<script>
   import CoachItem from "@/components/CoachItem.vue"
   import BaseCard from "@/components/BaseCard.vue"
   import BaseButton from "@/components/BaseButton.vue"
   import CoachFilter from "@/components/CoachFilter.vue"
   import BaseSpinner from "@/components/BaseSpinner.vue"
   import BaseDialog from "@/components/BaseDialog.vue"

   export default {
      components: { CoachItem, BaseCard, BaseButton, CoachFilter, BaseSpinner, BaseDialog },
      data() {
         return {
            isError: null,
            isLoading: false,
            activeFilters: { frontend: true, backend: true, career: true },
         }
      },
      computed: {
         isCoach() {
            return this.$store.getters["coaches/isCoach"] // from store
         },
         filteredCoaches() {
            const coaches = this.$store.getters["coaches/coaches"]
            return coaches.filter((coach) => {
               if (this.activeFilters.frontend && coach.areas.includes("frontend")) return true
               if (this.activeFilters.backend && coach.areas.includes("backend")) return true
               if (this.activeFilters.career && coach.areas.includes("career")) return true

               return false
            })
         },
         hasCoaches() {
            return !this.isLoading && this.$store.getters["coaches/hasCoaches"]
         },
      },
      created() {
         this.loadCoaches()
      },
      methods: {
         setFilter(updatedFilters) {
            this.activeFilters = updatedFilters
         },
         async loadCoaches(refresh = false) {
            this.isLoading = true
            try {
               await this.$store.dispatch("coaches/loadCoaches", { forceRefresh: refresh })
            } catch (error) {
               this.error = error.message || "Failed to fetch coaches."
            }
            this.isLoading = false
         },
         handleError() {
            this.error = null
         },
      },
   }
</script>

<template>
   <div>
      <BaseDialog :show="!!error" title="An error occurred!" @close="handleError">
         <p>{{ error }}</p>
      </BaseDialog>
      <section>
         <CoachFilter @change-filter="setFilter" />
      </section>
      <section>
         <BaseCard>
            <div class="controls">
               <BaseButton mode="outline" @click="loadCoaches(true)">Refresh</BaseButton>
               <BaseButton v-if="!isCoach && !isLoading" to="/register" link>Register as Coach</BaseButton>
            </div>
            <div v-if="isLoading">
               <BaseSpinner />
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
   </div>
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
