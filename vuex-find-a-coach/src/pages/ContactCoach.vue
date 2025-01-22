<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

import BaseButton from "@/components/BaseButton.vue"

const store = useStore()
const router = useRouter()

const email = ref("")
const message = ref("")
const formIsValid = ref(true)

const submitForm = () => {
    formIsValid.value = true
    if (email.value === "" || !email.value.includes("@") || message.value === "") {
        formIsValid.value = false
    }

    store.dispatch("requests/contactCoach", {
        coachId: router.currentRoute.value.params.id,
        email: email.value,
        message: message.value,
    })
    router.replace("/coaches")
}
</script>

<style scoped>
.form-control {
    @apply my-2;
}

label {
    @apply font-bold block mb-2;
}

input,
textarea {
    @apply block w-full border border-[#ccc] rounded p-2;
}

input:focus,
textarea:focus {
    @apply border-[#3d008d] outline-none bg-[#faf6ff];
}
</style>

<template>
    <form @submit.prevent="submitForm" class="m-4 border border-[#ccc] rounded-xl p-4">
        <div>
            <label for="email">Your E-Mail</label>
            <input type="email" id="email" v-model.trim="email" />
        </div>

        <div>
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="5" v-model.trim="message" />
        </div>

        <p class="font-bold text-rose-600" v-if="!formIsValid">
            Please enter a valid email & non-empty message.
        </p>

        <div class="text-center">
            <BaseButton>Send Message</BaseButton>
        </div>
    </form>
</template>
