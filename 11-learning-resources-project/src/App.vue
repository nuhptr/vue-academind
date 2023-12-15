<script>
   import StoredResource from "./components/resource/StoredResource.vue"
   import Theheader from "./components/layout/TheHeader.vue"

   export default {
      components: { StoredResource, Theheader },
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
   <Theheader title="RememberMe" />
   <StoredResource :key="storedResources.id" :resources="storedResources" />
</template>

<style>
   @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

   * {
      box-sizing: border-box;
   }
   html {
      font-family: "Roboto", sans-serif;
   }
   body {
      margin: 0;
   }
</style>
