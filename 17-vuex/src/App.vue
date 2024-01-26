<script>
   import BaseContainer from "@/components/BaseContainer.vue"
   import TheCounter from "./components/TheCounter.vue"
   import ChangeCounter from "./components/ChangeCounter.vue"
   import FavoriteValue from "./components/FavoriteValue.vue"
   import UserAuth from "./components/UserAuth.vue"

   export default {
      components: { UserAuth, BaseContainer, TheCounter, ChangeCounter, FavoriteValue },
      methods: {
         addOne() {
            // this.$store.commit("increase", { value: 10 })
            this.$store.dispatch({ type: "increase", value: 10 })
         },
      },
      computed: {
         isAuth() {
            return this.$store.getters.userIsAuthenticated
         },
      },
   }
</script>

<template>
   <BaseContainer title="Vuex" v-if="isAuth">
      <TheCounter />
      <FavoriteValue />
      <button @click="addOne">Add 10</button>
      <ChangeCounter />
   </BaseContainer>

   <BaseContainer title="Auth">
      <UserAuth />
   </BaseContainer>
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
