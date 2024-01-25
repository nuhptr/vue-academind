<script>
   import Theheader from "./components/layout/TheHeader.vue"
   import TheResources from "./components/resource/TheResources.vue"

   export default {
      components: { Theheader, TheResources },
   }
</script>

<template>
   <Theheader title="RememberMe" />
   <TheResources />
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
