<script setup>
import { computed, onMounted, ref } from "vue"
import { useStore } from "vuex"

import BaseBadge from "@/components/BaseBadge.vue"
import BaseButton from "@/components/BaseButton.vue"
import BaseCard from "@/components/BaseCard.vue"

const store = useStore()
const selectedCoach = ref(null)

const props = defineProps(["id"])

onMounted(() => {
    selectedCoach.value = store.getters["coaches/coaches"].find((coach) => coach.id === props.id)
})

const fullName = computed(() => {
    return selectedCoach.value.firstName + " " + selectedCoach.value.lastName
})
const contactLink = computed(() => {
    return "/coaches/" + props.id + "/contact"
})
const areas = computed(() => {
    return selectedCoach.value.areas
})
const rate = computed(() => {
    return selectedCoach.value.hourlyRate
})
const description = computed(() => {
    return selectedCoach.value.description
})
</script>

<template>
    <div>
        <section>
            <BaseCard>
                <h2>{{ fullName }}</h2>
                <h3>${{ rate }}/hour</h3>
            </BaseCard>
        </section>
        <section>
            <BaseCard>
                <header>
                    <h2>Interested? Reach out now!</h2>
                    <BaseButton link :to="contactLink">Contact</BaseButton>
                </header>

                <!-- Children View -->
                <RouterView />
            </BaseCard>
        </section>
        <section>
            <BaseCard>
                <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
                <p style="line-height: 2rem; letter-spacing: -0.2px">{{ description }}</p>
            </BaseCard>
        </section>
    </div>
</template>
