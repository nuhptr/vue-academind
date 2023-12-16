<script>
   import LearningSurvey from "./components/survey/LearningSurvey.vue"
   import UserExperiences from "./components/survey/UserExperiences.vue"

   export default {
      components: { LearningSurvey, UserExperiences },
      data() {
         return {
            savedSurveyResults: [],
         }
      },
      methods: {
         storeSurvey(surveyData) {
            const surveyResult = {
               id: new Date().toISOString(),
               name: surveyData.userName,
               rating: surveyData.rating,
            }
            this.savedSurveyResults.push(surveyResult)
            console.log(surveyResult)
         },
      },
   }
</script>

<template>
   <LearningSurvey @surveySubmit="storeSurvey" />
   <UserExperiences :results="savedSurveyResults" />
</template>

<style>
   * {
      box-sizing: border-box;
   }
   html {
      font-family: sans-serif;
   }
   body {
      margin: 0;
   }
</style>
