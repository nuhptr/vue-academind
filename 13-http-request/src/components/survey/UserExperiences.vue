<script>
   import BaseButton from "../UI/BaseButton.vue"
   import BaseCard from "../UI/BaseCard.vue"
   import SurveyResult from "./SurveyResult.vue"

   export default {
      components: { BaseCard, BaseButton, SurveyResult },
      props: ["results"],
   }
</script>

<template>
   <section>
      <BaseCard>
         <h2>Submitted Experiences</h2>
         <div>
            <BaseButton>Load Submitted Experiences</BaseButton>
         </div>
         <ul>
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
