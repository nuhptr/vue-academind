<script>
   import TheHeader from "@/components/TheHeader.vue"

   export default {
      components: { TheHeader },
      created() {
         this.$store.dispatch("tryLogin")
      },
      computed: {
         didAutoLogout() {
            return this.$store.getters["auth/didAutoLogout"]
         },
      },
      watch: {
         didAutoLogout(curValue, oldValue) {
            if (curValue && curValue !== oldValue) this.$router.replace("/auth")
         },
      },
   }
</script>

<template>
   <TheHeader />
   <RouterView v-slot="slotProps">
      <Transition name="route" mode="out-in">
         <component :is="slotProps.Component" />
      </Transition>
   </RouterView>
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

   .route-enter-from {
      opacity: 0;
      transform: translateX(-30px);
   }

   .route-leave-to {
      opacity: 0;
      transform: translateX(30px);
   }

   .route-enter-active {
      transition: all 0.3s ease-out;
   }

   .route-leave-active {
      transition: all 0.3s ease-in;
   }

   .route-enter-to,
   .route-leave-from {
      opacity: 1;
      transform: translateY(0);
   }
</style>
