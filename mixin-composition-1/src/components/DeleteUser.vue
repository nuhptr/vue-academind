<script setup>
import { ref } from "vue"

import UserAlert from "./UserAlert.vue"
import useAlert from "@/composable/useAlert.js"

const alertTitle = ref("Delete this one?")

const { alertIsVisible, hideAlert, showAlert } = useAlert()
</script>

<template>
    <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
        <p>Do you want to continue with deleting a user?</p>
    </user-alert>
    <section>
        <h2>Delete a User</h2>
        <button @click="showAlert">Delete User</button>
    </section>
</template>
