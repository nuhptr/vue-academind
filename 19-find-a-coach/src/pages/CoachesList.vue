<script setup>
import { ref, computed, onMounted } from "vue"
import { useStore } from "vuex"

import CoachItem from "@/components/CoachItem.vue"
import BaseCard from "@/components/BaseCard.vue"
import BaseButton from "@/components/BaseButton.vue"
import CoachFilter from "@/components/CoachFilter.vue"
import BaseSpinner from "@/components/BaseSpinner.vue"
import BaseDialog from "@/components/BaseDialog.vue"

const store = useStore()

const isError = ref(null)
const isLoading = ref(false)
const activeFilters = ref({ frontend: true, backend: true, career: true })

onMounted(() => {
   loadCoaches()
})

const isLoggedIn = computed(() => {
   return store.getters["auth/isAuthenticated"]
})
const isCoach = computed(() => {
   return store.getters["coaches/isCoach"]
})
const filteredCoaches = computed(() => {
   const coaches = store.getters["coaches/coaches"]
   return coaches.filter((coach) => {
      if (activeFilters.value.frontend && coach.areas.includes("frontend")) return true
      if (activeFilters.value.backend && coach.areas.includes("backend")) return true
      if (activeFilters.value.career && coach.areas.includes("career")) return true

      return false
   })
})
const hasCoaches = computed(() => {
   return !isLoading && store.getters["coaches/hasCoaches"]
})

const setFilter = (updatedFilters) => {
   activeFilters.value = updatedFilters
}
const loadCoaches = async (refresh = false) => {
   isLoading.value = true
   try {
      await store.dispatch("coaches/loadCoaches", { forceRefresh: refresh })
   } catch (error) {
      isError.value = error.message || "Failed to fetch coaches."
   }
   isLoading.value = false
}
const handleError = () => {
   isError.value = null
}
</script>

<style scoped>
/* Add your styles here */
</style>

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
            <div class="flex justify-between">
               <BaseButton mode="outline" @click="loadCoaches(true)">Refresh</BaseButton>
               <BaseButton link to="/auth?redirect=register" v-if="!isLoggedIn"
                  >Login to register as coach</BaseButton
               >
               <BaseButton v-if="isLoggedIn && !isCoach && !isLoading" to="/register" link>
                  Register as Coach
               </BaseButton>
            </div>
            <div v-if="isLoading">
               <BaseSpinner />
            </div>
            <ul class="list-none" v-if="hasCoaches">
               <CoachItem
                  v-for="coach in filteredCoaches"
                  :key="coach.id"
                  :id="coach.id"
                  :firstName="coach.firstName"
                  :lastName="coach.lastName"
                  :rate="coach.hourlyRate"
                  :areas="coach.areas"
               />
            </ul>
            <h3 v-else>No coaches found.</h3>
         </BaseCard>
      </section>
   </div>
</template>
