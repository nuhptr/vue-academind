<template>
   <h2>{{ userName }}</h2>
   <h3>{{ age }}</h3>
</template>

<script setup>
   import { computed, defineProps, inject } from "vue"

   const props = defineProps({ firstName: String, lastName: String })

   // const age = ref(31)
   const age = inject("userAge")

   const userName = computed(() => {
      return this.props.firstName + "" + this.props.lastName
   })

   //    context.emit("changeAge", () => {
   //       this.props.age += 1
   //    })
</script>
