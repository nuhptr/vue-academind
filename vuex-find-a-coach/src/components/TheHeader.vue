<script setup>
import { RouterLink, useRouter } from "vue-router"
import { computed } from "vue"
import { useStore } from "vuex"

import BaseButton from "./BaseButton.vue"

const router = useRouter()
const store = useStore()

const isLoggedIn = computed(() => {
    return store.getters["auth/isAuthenticated"]
})

const logout = () => {
    store.dispatch("auth/logout")
    router.replace("/coaches")
}
</script>

<style scoped>
header {
    & a {
        @apply text-[#f391e3] inline-block px-6 py-3 border border-transparent;

        &:active,
        &:hover,
        &.router-link-active {
            @apply border-[#f391e3] rounded-[100px];
        }
    }

    & nav {
        @apply w-[90%] m-auto flex justify-between items-center;
    }

    & ul {
        @apply list-none m-0 p-0 flex justify-center items-center;
    }
}
</style>

<template>
    <header class="w-full h-[5rem] bg-[#3d008d] flex justify-center items-center">
        <nav>
            <h1 class="m-0">
                <RouterLink
                    class="m-0 text-white hover:border-transparent active:border-transparent"
                    active-class="border-transparent"
                    to="/"
                >
                    Find a Coach
                </RouterLink>
            </h1>

            <ul>
                <li class="mx-2">
                    <RouterLink to="/coaches">All Coaches</RouterLink>
                </li>
                <li class="mx-2" v-if="isLoggedIn">
                    <RouterLink to="/request">Requests</RouterLink>
                </li>
                <li class="mx-2" v-else>
                    <RouterLink to="/auth">Login</RouterLink>
                </li>
                <li class="mx-2" v-if="isLoggedIn">
                    <BaseButton @click="logout">Logout</BaseButton>
                </li>
            </ul>
        </nav>
    </header>
</template>
