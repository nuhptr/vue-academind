<script setup>
import { useStore } from "vuex"
import { computed } from "vue"

import BaseContainer from "@/components/BaseContainer.vue"
import TheCounter from "@/components/TheCounter.vue"
import ChangeCounter from "@/components/ChangeCounter.vue"
import FavoriteValue from "@/components/FavoriteValue.vue"
import UserAuth from "@/components/UserAuth.vue"

const store = useStore() // how to use store

const addOne = () => {
    store.dispatch({ type: "numbers/increase", value: 10 })
}

const isAuth = computed(() => store.getters.userIsAuthenticated)
</script>

<style>
* {
    box-sizing: border-box;
    font-family: sans-serif;
    margin: 0;
}
</style>

<template>
    <BaseContainer title="Vuex" v-if="isAuth">
        <div class="flex flex-col">
            <div class="flex flex-col items-center justify-center gap-4">
                <TheCounter />
                <FavoriteValue />
            </div>

            <div class="flex flex-col items-center gap-4 mt-4">
                <button @click="addOne">Add 10</button>
                <ChangeCounter />
            </div>
        </div>
    </BaseContainer>

    <BaseContainer title="Auth">
        <UserAuth />
    </BaseContainer>
</template>
