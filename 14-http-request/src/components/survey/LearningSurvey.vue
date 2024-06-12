<script setup>
import axios from "axios"
import { ref } from "vue"

import BaseButton from "../ui/BaseButton.vue"
import BaseCard from "../ui/BaseCard.vue"

const enteredName = ref("")
const chosenRating = ref(null)
const invalidInput = ref(false)
const errors = ref(null)

const submitSurvey = async () => {
   if (enteredName.value === "" || !chosenRating.value) {
      invalidInput.value = true
      return
   }

   invalidInput.value = false

   try {
      await axios.post(
         "https://vue-http-e7d2b-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json",
         { name: enteredName.value, rating: chosenRating.value }
      )
   } catch (error) {
      console.error(error)
      errors.value = "Error getting data - please try again later."
   }

   enteredName.value = ""
   chosenRating.value = null
}
</script>

<style scoped>
.form-control {
   @apply mx-0 my-2;
}

input[type="text"] {
   @apply block w-[20rem] mt-2;
}
</style>

<template>
   <section>
      <BaseCard>
         <h2>How was you learning experience?</h2>
         <form @submit.prevent="submitSurvey">
            <div class="form-control">
               <label for="name">Your Name</label>
               <input type="text" id="name" name="name" v-model.trim="enteredName" />
            </div>

            <h3>My learning experience was ...</h3>

            <div class="form-control">
               <input
                  type="radio"
                  id="rating-poor"
                  value="poor"
                  name="rating"
                  v-model="chosenRating"
               />
               <label for="rating-poor">Poor</label>
            </div>

            <div class="form-control">
               <input
                  type="radio"
                  id="rating-average"
                  value="average"
                  name="rating"
                  v-model="chosenRating"
               />
               <label for="rating-average">Average</label>
            </div>

            <div class="form-control">
               <input
                  type="radio"
                  id="rating-great"
                  value="great"
                  name="rating"
                  v-model="chosenRating"
               />
               <label for="rating-great">Great</label>
            </div>

            <p v-if="invalidInput">
               One or more input fields are invalid. Please check your provided data.
            </p>

            <div>
               <BaseButton>Submit</BaseButton>
            </div>
         </form>
      </BaseCard>
   </section>
</template>
