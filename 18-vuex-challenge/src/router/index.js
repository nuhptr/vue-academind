import { createRouter, createWebHistory } from "vue-router"

import ProductList from "../pages/ProductList.vue"
import UserCart from "../pages/UserCart.vue"
import ShopAdmin from "../pages/ShopAdmin.vue"

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: "/", redirect: "/products" },
      { path: "/products", component: ProductList },
      { path: "/cart", component: UserCart },
      { path: "/admin", component: ShopAdmin },
   ],
})

export default router
