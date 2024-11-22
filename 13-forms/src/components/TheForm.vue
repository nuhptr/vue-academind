<script setup>
import { ref, computed } from "vue"

import RatingControl from "./RatingControl.vue"

const userName = ref("")
const userAge = ref(0)
const referrer = ref("")
const rating = ref("")
const interest = ref([])
const how = ref(null)
const confirm = ref(false)
const userNameValidity = ref("pending")

// Function
const submitForm = () => {
    if (!confirm.value) {
        alert("Please agree to the terms and conditions!")
    } else {
        //** Send the data to the server
        const formData = {
            name: userName.value,
            age: userAge.value,
            referrer: referrer.value,
            interest: interest.value,
            how: how.value,
            rating: rating.value,
        }
        console.log(formData)
    }
}

const validateInput = () => {
    if (userName.value === "") userNameValidity.value = "invalid"
    else userNameValidity.value = "valid"
}
</script>

<style scoped>
input,
select {
    font: inherit;
}

button {
    font: inherit;
}

input[type="checkbox"],
input[type="radio"] {
    @apply w-auto inline-block mr-4;
}

/* This means label elements that are immediately after a checkbox or radio input */
input[type="checkbox"] + label,
input[type="radio"] + label {
    @apply font-normal;
}
</style>

<template>
    <form
        @submit.prevent="submitForm"
        class="mx-auto my-[2rem] max-w-[40rem] rounded-md shadow-md p-8 bg-white"
    >
        <div class="my-[0.5rem] mx-0">
            <label
                for="user-name"
                class="font-bold"
                :class="{ 'text-rose-500': userNameValidity === 'invalid' }"
            >
                Your Name
            </label>
            <input
                id="user-name"
                name="user-name"
                type="text"
                v-model.trim="userName"
                @blur="validateInput"
                class="block w-full mt-[0.5rem] border"
                :class="{ 'border-rose-500': userNameValidity === 'invalid' }"
            />
            <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
        </div>

        <div class="my-[0.5rem] mx-0">
            <label class="font-bold" for="age">Your Age (Years)</label>
            <input
                id="age"
                name="age"
                type="number"
                v-model="userAge"
                class="block w-full mt-[0.5rem] border px-2"
            />
        </div>

        <div class="my-[0.5rem] mx-0">
            <label class="font-bold" for="referrer">How did you hear about us?</label>
            <select
                class="w-auto block mt-[0.5rem]"
                id="referrer"
                name="referrer"
                v-model="referrer"
            >
                <option value="google">Google</option>
                <option value="wom">Word of mouth</option>
                <option value="newspaper">Newspaper</option>
            </select>
        </div>

        <div class="my-[0.5rem] mx-0">
            <h2 class="text-base mx-0 my-[0.5rem]">What are you interested in?</h2>
            <div>
                <input
                    id="interest-news"
                    name="interest"
                    type="checkbox"
                    value="news"
                    v-model="interest"
                    class="block w-full mt-[0.5rem]"
                />
                <label class="font-bold" for="interest-news">News</label>
            </div>
            <div>
                <input
                    id="interest-tutorials"
                    name="interest"
                    type="checkbox"
                    value="tutorials"
                    v-model="interest"
                    class="block w-full mt-[0.5rem]"
                />
                <label class="font-bold" for="interest-tutorials">Tutorials</label>
            </div>
            <div>
                <input
                    id="interest-nothing"
                    name="interest"
                    type="checkbox"
                    value="nothing"
                    v-model="interest"
                    class="block w-full mt-[0.5rem]"
                />
                <label class="font-bold" for="interest-nothing">Nothing</label>
            </div>
        </div>

        <div class="my-[0.5rem] mx-0">
            <h2 class="text-base mx-0 my-[0.5rem]">How do you learn?</h2>
            <div>
                <input
                    id="how-video"
                    name="how"
                    type="radio"
                    value="video"
                    v-model="how"
                    class="block w-full mt-[0.5rem]"
                />
                <label class="font-bold" for="how-video">Video Courses</label>
            </div>
            <div>
                <input
                    id="how-blogs"
                    name="how"
                    type="radio"
                    value="blogs"
                    v-model="how"
                    class="block w-full mt-[0.5rem]"
                />
                <label class="font-bold" for="how-blogs">Blogs</label>
            </div>
            <div>
                <input
                    id="how-other"
                    name="how"
                    type="radio"
                    value="othersf"
                    v-model="how"
                    class="block w-full mt-[0.5rem]"
                />
                <label class="font-bold" for="how-other">Other</label>
            </div>
        </div>

        <div class="my-[0.5rem] mx-0">
            <RatingControl
                :model-value="rating"
                @update:model-value="($event) => (rating = $event)"
            />
        </div>

        <div class="my-[0.5rem] mx-0">
            <input
                type="checkbox"
                id="confirm-terms"
                name="confirm-terms"
                v-model="confirm"
                class="block w-full mt-[0.5rem]"
            />
            <label class="font-bold" for="confirm-terms">Agree to terms of use?</label>
        </div>

        <div>
            <button
                class="px-8 py-3 text-white cursor-pointer bg-sky-500 rounded-2xl hover:bg-sky-600 active:bg-sky-600"
            >
                Save Data
            </button>
        </div>
    </form>
</template>
