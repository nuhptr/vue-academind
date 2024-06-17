<script setup>
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { ref } from "vue"

import BaseButton from "@/components/BaseButton.vue"
import BaseCard from "@/components/BaseCard.vue"
import BaseDialog from "@/components/BaseDialog.vue"
import BaseSpinner from "@/components/BaseSpinner.vue"

const store = useStore()
const router = useRouter()

const email = ref("")
const password = ref("")
const formIsValid = ref(false)
const mode = ref("login")
const isLoading = ref(false)
const error = ref(null)

const submitButtonCaption = computed(() => {
   if (mode.value === "login") return "Login"
   else return "Signup"
})
const switchModeButtonCaption = computed(() => {
   if (mode.value === "login") return "Signup instead"
   else return "Login instead"
})

const submitForm = async () => {
   formIsValid.value = true
   if (email.value === "" || !email.value.includes("@") || password.value < 6) {
      formIsValid.value = false
      return
   }

   isLoading.value = true
   const actionPayload = { email: email.value, password: password.value }

   try {
      if (mode.value === "login") {
         await store.dispatch("auth/login", actionPayload)
      } else {
         await store.dispatch("auth/signUp", actionPayload)
      }

      const redirectUrl = "/" + (router.currentRoute.value.query.redirect || "/coaches")
      router.replace(redirectUrl) // redirect to query.redirect or /coaches
   } catch (error) {
      error.value = error.message || "Failed to authenticate. Please try again."
      isLoading.value = false
   }
   isLoading.value = false
}

const switchMode = () => {
   if (mode.value === "login") mode.value = "signup"
   else mode.value = "login"
}

const handleError = () => {
   error.value = null
}
</script>

<style scoped>
form {
   @apply m-4 p-4;
}

.form-control {
   @apply my-2;
}

label {
   @apply font-bold block mb-2;
}

input,
textarea {
   @apply block w-full p-1 border border-gray-300 rounded;
}

input:focus,
textarea:focus {
   @apply border-[#3d008d] bg-[#faf6ff] outline-none;
}
</style>

<template>
   <div>
      <BaseDialog :show="!!error" title="An error occurred!" @close="handleError">
         {{ error }}
      </BaseDialog>

      <BaseDialog fixed :show="isLoading" title="Authenticating...">
         <BaseSpinner />
      </BaseDialog>

      <form @submit.prevent="submitForm">
         <BaseCard>
            <div class="form-control">
               <label for="email">E-mail</label>
               <input type="email" id="email" v-model.trim="email" />
            </div>
            <div class="form-control">
               <label for="password">Password</label>
               <input type="password" id="password" v-model.trim="password" />
            </div>
            <p v-if="!formIsValid">
               Please enter a valid email and password (must be at least 6 characters)
            </p>
            <BaseButton>{{ submitButtonCaption }}</BaseButton>
            <BaseButton type="button" mode="flat" @click="switchMode">
               {{ switchModeButtonCaption }}</BaseButton
            >
         </BaseCard>
      </form>
   </div>
</template>
