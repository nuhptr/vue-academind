<script setup>
import { inject, computed } from "vue"
import { useStore } from "vuex"

import ProductItem from "../components/products/ProductItem.vue"

const store = useStore()

// const products = inject('products');
const allProducts = computed(() => store.getters["prod/products"])
</script>

<style scoped>
/* Style goes here */
</style>

<template>
   <section>
      <ul class="list-none mx-auto my-8 p-0 max-w-[40rem]">
         <ProductItem
            v-for="product in allProducts"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :image="product.image"
            :description="product.description"
            :price="product.price"
         />
      </ul>
   </section>
</template>
