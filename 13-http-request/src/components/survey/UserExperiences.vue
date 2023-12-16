<script>
   import BaseButton from "../UI/BaseButton.vue"
   import BaseCard from "../UI/BaseCard.vue"
   import SurveyResult from "./SurveyResult.vue"

   import axios from "axios"

   export default {
      components: { BaseCard, BaseButton, SurveyResult },
      data() {
         return {
            results: [],
            isLoading: false,
            error: null,
         }
      },
      methods: {
         loadExperiences() {
            this.isLoading = true
            this.error = null
            try {
               const response = axios.get(
                  "https://vue-http-e7d2b-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json"
               )
               const data = response.data
               const results = []
               for (const key in data) {
                  results.push({
                     id: key,
                     name: data[key].name,
                     rating: data[key].rating,
                  })
               }
            } catch (error) {
               console.error(error)
               this.isLoading = false
               this.error = "Failed to fetch data - Please try again later."
            }

            this.results = results
            this.isLoading = false
         },
      },
      mounted() {
         this.loadExperiences()
      },
   }
</script>

<template>
   <section>
      <BaseCard>
         <h2>Submitted Experiences</h2>
         <div>
            <BaseButton @click="loadExperiences">Load Submitted Experiences</BaseButton>
         </div>
         <p v-if="isLoading">Loading...</p>
         <p v-else-if="!isLoading && error">{{ error }}</p>
         <p v-else-if="!isLoading && (!results || results.length === 0)">No stories available. Maybe submit one?</p>
         <ul v-else>
            <SurveyResult v-for="result in results" :key="result.id" :name="result.name" :rating="result.rating" />
         </ul>
      </BaseCard>
   </section>
</template>

<style scoped>
   ul {
      list-style: none;
      margin: 0;
      padding: 0;
   }
</style>
