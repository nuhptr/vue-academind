<script>
   export default {
      computed: {
         counter() {
            // When use namespaced modules, you need to specify the module name
            return this.$store.getters["numbers/normalizedCounter"]
         },
      },
   }
</script>

<template>
   <h3>{{ counter }}</h3>
   <p>We do more...</p>
</template>
