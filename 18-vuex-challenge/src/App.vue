<script setup>
import TheHeader from "./components/nav/TheHeader.vue"

// import { ref, provide } from "vue"

// const isLoggedIn = ref(false)
// const products = ref([])
// const cart = ref({ items: [], total: 0, qty: 0 })

// provide("isLoggedIn", isLoggedIn)
// provide("products", products)
// provide("cart", cart)
// provide("login", login)
// provide("logout", logout)
// provide("addProductToCart", addProductToCart)
// provide("removeProductFromCart", removeProductFromCart)

// const login = () => {
// isLoggedIn.value = true
// }

// const logout = () => {
// isLoggedIn.value = false
// }

// const addProductToCart = (productData) => {
//    const productInCartIndex = cart.items.findIndex((ci) => ci.productId === productData.id)
//    if (productInCartIndex >= 0) cart.items[productInCartIndex].qty++
//    else {
//       const newItem = {
//          productId: productData.id,
//          title: productData.title,
//          image: productData.image,
//          price: productData.price,
//          qty: 1,
//       }

//       cart.items.push(newItem)
//    }

//    cart.qty++
//    cart.total += productData.price
// }

// const removeProductFromCart = (prodId) => {
//    const productInCartIndex = cart.items.findIndex((cartItem) => cartItem.productId === prodId)
//    const prodData = cart.items[productInCartIndex]
//    cart.items.splice(productInCartIndex, 1)
//    cart.qty -= prodData.qty
//    cart.total -= prodData.price * prodData.qty
// }
</script>

<style>
* {
   font-family: sans-serif;
   margin: 0;
   box-sizing: border-box;
}
</style>

<template>
   <TheHeader />
   <RouterView />
</template>
