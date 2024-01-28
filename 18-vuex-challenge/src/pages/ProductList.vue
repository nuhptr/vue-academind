<script>
   import ProductItem from "../components/products/ProductItem.vue"

   export default {
      // inject: ["products"],
      components: { ProductItem },
      computed: {
         // replace provide inject
         allProducts() {
            return this.$store.getters["prod/products"]
         },
      },
   }
</script>

<template>
   <section>
      <ul>
         <ProductItem
            v-for="product in allProducts"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :image="product.image"
            :description="product.description"
            :price="product.price" />
      </ul>
   </section>
</template>

<style scoped>
   ul {
      list-style: none;
      margin: 2rem auto;
      padding: 0;
      max-width: 40rem;
   }
</style>
