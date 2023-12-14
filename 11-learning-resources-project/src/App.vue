<script>
   import LearningResource from "./components/LearningResource.vue"

   export default {
      components: { LearningResource },
      data() {
         return {
            storedResources: [
               {
                  id: "vue-mastery",
                  title: "Learn Vue",
                  description: "Learn Vue in 30 minutes",
                  link: "https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance",
               },
               {
                  id: "css-mastery",
                  title: "Learn CSS",
                  description: "Learn CSS in 30 minutes",
                  link: "https://www.udemy.com/course/the-complete-css-mastery-course/",
               },
               {
                  id: "html-mastery",
                  title: "Learn HTML",
                  description: "Learn HTML in 30 minutes",
                  link: "https://www.udemy.com/course/html-and-css-basics-to-advance-with-real-website-designs/",
               },
            ],
         }
      },
   }
</script>

<template>
   <ul>
      <LearningResource v-for="response in storedResources" :key="response.id" :data="response" />
   </ul>
</template>

<style></style>
