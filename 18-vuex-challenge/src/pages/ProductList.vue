<script>
   import ProductItem from "../components/products/ProductItem.vue"

   export default {
      inject: ["products"],
      components: { ProductItem },
   }
</script>

<template>
   <section>
      <ul>
         <ProductItem
            v-for="prod in products"
            :key="prod.id"
            :id="prod.id"
            :title="prod.title"
            :image="prod.image"
            :description="prod.description"
            :price="prod.price" />
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
