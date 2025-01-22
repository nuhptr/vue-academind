<script setup>
import { ref } from "vue"

import ErrorAlert from "./ErrorAlert.vue"

const inputIsInvalid = ref(false)
const goal = ref()
const enteredValue = ref("")

const setGoal = () => {
    enteredValue.value = goal.value
    if (enteredValue.value === "") inputIsInvalid.value = true
}

const confirmError = () => {
    inputIsInvalid.value = false
}
</script>

<style>
/* Style goes here */
</style>

<template>
    <div class="flex items-center max-w-2xl gap-4 mx-auto">
        <div class="flex flex-col gap-y-1">
            <h2>Manage Goals</h2>
            <p>{{ enteredValue.toUpperCase() }}</p>
        </div>
        <input
            class="px-2 py-2 border rounded-md border-sky-500 bg-sky-100"
            type="text"
            v-model="goal"
        />
        <button
            class="px-2 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            @click="setGoal"
        >
            Set Goal
        </button>
    </div>

    <!-- * Teleport component to another tree -->
    <Teleport to="body">
        <ErrorAlert v-if="inputIsInvalid">
            <h2>Input is invalid!</h2>
            <p>Please enter at least a few character...</p>
            <button @click="confirmError">Okay</button>
        </ErrorAlert>
    </Teleport>
</template>
