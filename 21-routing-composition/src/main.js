import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"

import App from "@/App.vue"
import AllProducts from "@/pages/AllProducts.vue"
import ProductDetails from "@/pages/ProductDetails.vue"
import AddProduct from "@/pages/AddProduct.vue"

import "./globals.css"

const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: "/", redirect: "/products" },
      { path: "/products", component: AllProducts },
      // using props to pass the route parameter to the component
      { path: "/products/:pid", component: ProductDetails, props: true },
      { path: "/products/add", component: AddProduct },
   ],
})

const app = createApp(App)

app.use(router)
app.mount("#app")
