<script>
   import BaseContainer from "@/components/BaseContainer.vue"
   import TheCounter from "./components/TheCounter.vue"
   import ChangeCounter from "./components/ChangeCounter.vue"

   export default {
      components: { BaseContainer, TheCounter, ChangeCounter },
      methods: {
         addOne() {
            // this.$store.commit("increase", { value: 10 })
            this.$store.commit({ type: "increase", value: 10 })
         },
      },
   }
</script>

<template>
   <BaseContainer title="Vuex">
      <TheCounter />
      <button @click="addOne">Add 10</button>
      <ChangeCounter />
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
