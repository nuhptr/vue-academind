<script setup>
import { inject, defineProps, computed } from "vue"
import { useRoute } from "vue-router"

// const props = defineProps(["pid"])
// useRoute is a composable function that returns the current route
const route = useRoute()

const products = inject("products")

// Find the product with the id that matches the pid prop
// using .value because products is a ref
const selectedProduct = computed(() => {
   products.value.find((product) => product.id === route.params.pid)
})
// makes the selectedProduct reactive to the changes in the products array
const title = computed(() => selectedProduct.value.title)
const price = computed(() => selectedProduct.value.price)
const description = computed(() => selectedProduct.value.description)
</script>

<style scoped>
section {
   @apply mx-auto my-[3rem] max-w-[40rem] rounded-[12px] shadow-md p-4;
}
</style>

<template>
   <section>
      <h2>{{ title.value }}</h2>
      <h3>${{ price }}</h3>
      <p>{{ description }}</p>

      <RouterLink to="/products/p2">Product 2</RouterLink>
   </section>
</template>
