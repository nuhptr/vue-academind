<script setup>
import { ref } from "vue"

import BaseCard from "./BaseCard.vue"

const emit = defineEmits(["change-filter"])

const filters = ref({ frontend: true, backend: true, career: true })

const setFilter = (event) => {
    const inputId = event.target.id
    const isActive = event.target.checked

    const updatedFilters = { ...filters.value, [inputId]: isActive }
    filters.value = updatedFilters

    emit("change-filter", updatedFilters)
}
</script>

<style scoped>
/* Add your styles here */

.filter-option {
    &.active label {
        @apply font-bold;
    }
}
</style>

<template>
    <BaseCard>
        <h2 class="mx-0 my-2">Find Your Coach</h2>
        <span class="mr-4 filter-options">
            <input class="align-middle" type="checkbox" id="frontend" checked @change="setFilter" />
            <label class="ml-1 align-middle" for="frontend">Frontend</label>
        </span>
        <span class="mr-4 filter-options">
            <input class="align-middle" type="checkbox" id="backend" checked @change="setFilter" />
            <label class="ml-1 align-middle" for="backend">Backend</label>
        </span>
        <span class="mr-4 filter-options">
            <input class="align-middle" type="checkbox" id="career" checked @change="setFilter" />
            <label class="ml-1 align-middle" for="career">Career</label>
        </span>
    </BaseCard>
</template>
