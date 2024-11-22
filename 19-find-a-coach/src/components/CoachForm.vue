<script setup>
import { ref } from "vue"

import BaseButton from "./BaseButton.vue"

const emit = defineEmits(["save-data"])
const firstName = ref({ val: "", isValid: true })
const lastName = ref({ val: "", isValid: true })
const description = ref({ val: "", isValid: true })
const hourlyRate = ref({ val: null, isValid: true })
const areas = ref({ val: [], isValid: true })
const formIsValid = ref(true)

const clearValidity = (input) => {
    input.isValid = true
}

const validateForm = () => {
    formIsValid.value = true
    if (firstName.value.val === "") {
        firstName.value.isValid = false
        formIsValid.value = false
    }
    if (lastName.value.val === "") {
        lastName.value.isValid = false
        formIsValid.value = false
    }
    if (description.value.val === "") {
        description.value.isValid = false
        formIsValid.value = false
    }
    if (!hourlyRate.value.val || hourlyRate.value.val < 0) {
        hourlyRate.value.isValid = false
        formIsValid.value = false
    }
    if (areas.value.val.length === 0) {
        areas.value.isValid = false
        formIsValid.value = false
    }
}

const submitForm = () => {
    validateForm()

    if (!formIsValid.value) {
        return
    }

    const formData = {
        firstName: firstName.value.val,
        lastName: lastName.value.val,
        description: description.value.val,
        hourlyRate: hourlyRate.value.val,
        areas: areas.value.val,
    }

    emit("save-data", formData)
}
</script>

<style scoped>
.form-control {
    @apply mb-4;
}

label {
    @apply font-bold block mb-2;
}

input[type="checkbox"] + label {
    @apply font-normal inline ml-2;
}

input,
textarea {
    @apply block w-full border border-[#ccc];
}

input:focus,
textarea:focus {
    @apply bg-[#f0e6fd] outline-none border-[#3d008d];
}

input[type="checkbox"] {
    @apply inline w-auto border-none focus:outline-1 focus:outline-[#3d008d];
}

h3 {
    @apply text-base my-1;
}

.invalid {
    & label {
        @apply text-red-500;
    }

    & input,
    & textarea {
        @apply border border-red-500;
    }
}
</style>

<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !firstName.isValid }">
            <label for="firstname">Firstname</label>
            <input
                type="text"
                id="firstname"
                v-model.trim="firstName.val"
                @blur="clearValidity('firstName')"
            />
            <p style="color: red" v-if="!firstName.isValid">Firstname must be fill.</p>
        </div>

        <div class="form-control" :class="{ invalid: !lastName.isValid }">
            <label for="lastname">Lastname</label>
            <input
                type="text"
                id="lastname"
                v-model.trim="lastName.val"
                @blur="clearValidity('lastName')"
            />
            <p style="color: red" v-if="!lastName.isValid">Lastname must be fill.</p>
        </div>

        <div class="form-control" :class="{ invalid: !description.isValid }">
            <label for="description">Description</label>
            <textarea
                id="description"
                rows="5"
                v-model.trim="description.val"
                @blur="clearValidity('description')"
            ></textarea>
            <p style="color: red" v-if="!description.isValid">description must be fill.</p>
        </div>

        <div class="form-control" :class="{ invalid: !hourlyRate.isValid }">
            <label for="rate">Hourly Rate</label>
            <input
                type="number"
                id="rate"
                v-model.number="hourlyRate.val"
                @blur="clearValidity('hourlyRate')"
            />
            <p style="color: red" v-if="!hourlyRate.isValid">Hourly rate must be grater than 0</p>
        </div>

        <div class="form-control" :class="{ invalid: !areas.isValid }">
            <h3>Areas of Expertise</h3>
            <div>
                <input
                    type="checkbox"
                    id="frontend"
                    value="frontend"
                    v-model="areas.val"
                    @blur="clearValidity('areas')"
                />
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="backend"
                    value="backend"
                    v-model="areas.val"
                    @blur="clearValidity('areas')"
                />
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="career"
                    value="career"
                    v-model="areas.val"
                    @blur="clearValidity('areas')"
                />
                <label for="career">Career Advisory</label>
            </div>
            <p style="color: red" v-if="!areas.isValid">At least one expertise must be selected</p>
        </div>

        <p style="color: red" v-if="!formIsValid">Please fill all the fields and submit again.</p>
        <BaseButton>Register</BaseButton>
    </form>
</template>
