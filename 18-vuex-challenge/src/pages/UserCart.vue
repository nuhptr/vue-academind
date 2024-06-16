<script setup>
import { computed, inject } from "vue"
import { useStore } from "vuex"

import CartItem from "../components/cart/CartItem.vue"
import BaseBadge from "../components/ui/BaseBadge.vue"

// const cart = inject("cart")

const store = useStore()

const cartTotal = computed(() => store.getters["cart/cartTotal"])
const cartItems = computed(() => store.getters["cart/products"])
</script>

<style scoped>
/* Style goes here */
</style>

<template>
   <section class="mx-auto my-8">
      <h2 class="text-[#292929] text-center pb-4 border-b border-[#ccc] font-bold">Your Cart</h2>
      <h3 class="my-10 text-center">
         Total Amount: <BaseBadge mode="elegant">${{ cartTotal }}</BaseBadge>
      </h3>

      <ul class="grid grid-cols-1 gap-8 mx-10 list-none md:grid-cols-12">
         <CartItem
            v-for="item in cartItems"
            :key="item.productId"
            :prod-id="item.productId"
            :title="item.title"
            :image="item.image"
            :price="item.price"
            :qty="item.qty"
         />
      </ul>
   </section>
</template>
