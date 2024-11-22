<script setup>
import axios from "axios"
import { ref, onMounted } from "vue"

import BaseButton from "../ui/BaseButton.vue"
import BaseCard from "../ui/BaseCard.vue"
import SurveyResult from "./SurveyResult.vue"

const results = ref([])
const isLoading = ref(false)
const errors = ref(null)

const loadExperiences = async () => {
    isLoading.value = true
    errors.value = null

    try {
        const response = await axios.get(
            "https://vue-http-e7d2b-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json"
        )

        const data = response.data
        const results = []

        for (const key in data) {
            results.push({ id: key, name: data[key].name, rating: data[key].rating })
        }
    } catch (error) {
        console.error(error)
        isLoading.value = false
        errors.value = "Failed to fetch data - Please try again later."
    }

    results.value = results
    isLoading.value = false
}

onMounted(() => {
    loadExperiences()
})
</script>

<style scoped>
/* Style goes here */
</style>

<template>
    <section>
        <BaseCard>
            <h2>Submitted Experiences</h2>
            <div>
                <BaseButton @click="loadExperiences">Load Submitted Experiences</BaseButton>
            </div>

            <p v-if="isLoading">Loading...</p>
            <p v-else-if="!isLoading && error">{{ error }}</p>
            <p v-else-if="!isLoading && (!results || results.length === 0)">
                No stories available. Maybe submit one?
            </p>

            <ul class="p-0 m-0 list-none" v-else>
                <SurveyResult
                    v-for="result in results"
                    :key="result.id"
                    :name="result.name"
                    :rating="result.rating"
                />
            </ul>
        </BaseCard>
    </section>
</template>
