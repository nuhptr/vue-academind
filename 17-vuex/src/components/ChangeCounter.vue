<script>
   import { mapActions } from "vuex"

   export default {
      methods: {
         // addOne() {
         // this.$store.dispatch("increment")
         // },
         // ...mapActions(["increment", "increase"]),

         // When use namespaced modules, you need to specify the module name
         ...mapActions("numbers", { inc: "increment", increase: "increase" }),
      },
   }
</script>

<template>
   <button @click="inc">Add 2</button>
   <button @click="increase({ value: 10 })">Add 10</button>
</template>
