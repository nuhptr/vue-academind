<script setup>
import TheHeader from "@/components/TheHeader.vue"

import { RouterView, useRouter } from "vue-router"
import { Transition, onMounted, computed, watch } from "vue"
import { useStore } from "vuex"

const store = useStore()
const router = useRouter()

onMounted(() => {
    store.dispatch("tryLogin")
})

const didAutoLogout = computed(() => store.getters["auth/didAutoLogout"])

watch(
    () => store.getters["auth/didAutoLogout"],
    (curValue, oldValue) => {
        if (curValue && curValue !== oldValue) {
            router.replace("/auth")
        }
    }
)
</script>

<template>
    <TheHeader />
    <RouterView v-slot="slotProps">
        <Transition name="route" mode="out-in">
            <component :is="slotProps.Component" />
        </Transition>
    </RouterView>
</template>

<style>
.route-enter-from {
    @apply opacity-0 translate-x-[-30px];
}

.route-leave-to {
    @apply opacity-0 translate-x-[30px];
}

.route-enter-active {
    @apply transition-all duration-300 ease-out;
}

.route-leave-active {
    @apply transition-all duration-300 ease-in;
}

.route-enter-to,
.route-leave-from {
    @apply opacity-100 translate-y-0;
}
</style>
