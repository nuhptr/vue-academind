<script>
   import BaseBadge from "../ui/BaseBadge.vue"

   export default {
      components: { BaseBadge },
      // inject: ["isLoggedIn", "login", "logout", "cart"],
      computed: {
         cartQuantity() {
            return this.$store.getters["cart/quantity"]
         },
      },
   }
</script>

<template>
   <header>
      <h1>
         <RouterLink to="/">VueShop</RouterLink>
      </h1>
      <nav>
         <ul>
            <li>
               <RouterLink to="/products">Products</RouterLink>
            </li>
            <li>
               <RouterLink to="/cart">Cart</RouterLink>
               <BaseBadge mode="elegant">{{ cartQuantity }}</BaseBadge>
            </li>
            <li v-if="isLoggedIn"><RouterLink to="/admin">Admin</RouterLink></li>
         </ul>
      </nav>
      <div>
         <button v-if="!isLoggedIn" @click="login">Login</button>
         <button v-if="isLoggedIn" @click="logout">Logout</button>
      </div>
   </header>
</template>

<style scoped>
   header {
      height: 5rem;
      background-color: white;
      margin: 0 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-self: center;
      align-items: center;
   }

   li {
      margin: 0 1rem;
   }

   a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      border-bottom: 2px solid transparent;
      padding-bottom: 0.25rem;

      &:hover,
      &:active,
      &.router-link-active {
         color: #45006d;
         border-color: #45006d;
      }
   }

   button {
      font: inherit;
      cursor: pointer;
      padding: 0.5rem 1.5rem;
      border: 1px solid #45006d;
      background-color: transparent;
      color: #45006d;
      border-radius: 30px;

      &:hover,
      &:active {
         background-color: #f0d5ff;
      }
   }
</style>
