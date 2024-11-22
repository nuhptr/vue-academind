<script setup>
import { useStore } from "vuex"
import { useRouter } from "vue-router"

import BaseCard from "@/components/BaseCard.vue"
import CoachForm from "@/components/CoachForm.vue"

const store = useStore()
const router = useRouter()

const saveData = (data) => {
    console.log(data)
    store.dispatch("coaches/registerCoach", data)
    router.replace("/coaches")
}
</script>

<template>
    <section>
        <BaseCard>
            <h2>Register as a coach now!</h2>
            <CoachForm @save-data="saveData" />
        </BaseCard>
    </section>
</template>
