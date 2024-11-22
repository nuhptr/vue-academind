<script setup>
import { inject, computed } from "vue"
import { useStore } from "vuex"
import { RouterLink } from "vue-router"

import BaseBadge from "../ui/BaseBadge.vue"

// const cart = inject("cart")
// const isLoggedIn = inject("isLoggedIn")
// const login = inject("login")
// const logout = inject("logout")

const store = useStore()

const cartQuantity = computed(() => store.getters["cart/quantity"])
const isLoggedIn = computed(() => store.getters.isAuthenticated)

const login = () => {
    store.dispatch("login")
}

const logout = () => {
    store.dispatch("logout")
}
</script>

<style scoped>
/* Style goes here */
</style>

<template>
    <header class="h-[5rem] bg-white my-0 mx-[10%] flex justify-between items-center">
        <h1>
            <RouterLink to="/">VueShop</RouterLink>
        </h1>

        <nav>
            <ul class="flex items-center p-0 m-0 list-none justify-self-center">
                <li class="mx-4 my-0">
                    <RouterLink
                        class="pb-1 font-bold text-gray-600 border-b hover:text-violet-600 hover:border-violet-600 border-b-transparent"
                        active-class="text-violet-600 border-violet-600"
                        to="/products"
                    >
                        Products
                    </RouterLink>
                </li>
                <li class="mx-4 my-0">
                    <RouterLink
                        class="pb-1 font-bold text-gray-600 border-b hover:text-violet-600 hover:border-violet-600 border-b-transparent"
                        active-class="text-violet-600 border-violet-600"
                        to="/cart"
                    >
                        Cart
                    </RouterLink>
                    <BaseBadge mode="elegant">{{ cartQuantity }}</BaseBadge>
                </li>
                <li class="mx-4 my-0" v-if="isLoggedIn">
                    <RouterLink
                        class="pb-1 font-bold text-gray-600 border-b hover:text-violet-600 hover:border-violet-600 border-b-transparent"
                        active-class="text-violet-600 border-violet-600"
                        to="/admin"
                    >
                        Admin
                    </RouterLink>
                </li>
            </ul>
        </nav>

        <div>
            <button
                class="px-6 py-2 bg-transparent cursor-pointer text-violet-600 rounded-3xl hover:bg-violet-300 active:bg-violet-300"
                v-if="!isLoggedIn"
                @click="login"
            >
                Login
            </button>
            <button
                class="px-6 py-2 bg-transparent cursor-pointer text-violet-600 rounded-3xl hover:bg-violet-300 active:bg-violet-300"
                v-if="isLoggedIn"
                @click="logout"
            >
                Logout
            </button>
        </div>
    </header>
</template>
