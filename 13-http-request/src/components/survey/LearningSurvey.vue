<script>
   import BaseButton from "../UI/BaseButton.vue"
   import BaseCard from "../UI/BaseCard.vue"

   import axios from "axios"

   export default {
      components: { BaseCard, BaseButton },
      data() {
         return {
            enteredName: "",
            chosenRating: null,
            invalidInput: false,
            error: null,
         }
      },
      // emits: ["surveySubmit"],
      methods: {
         async submitSurvey() {
            if (this.enteredName === "" || !this.chosenRating) {
               this.invalidInput = true
               return
            }
            this.invalidInput = false

            // this.$emit("surveySubmit", {
            //    userName: this.enteredName,
            //    rating: this.chosenRating,
            // })

            try {
               await axios.post(
                  "https://vue-http-e7d2b-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json",
                  {
                     name: this.enteredName,
                     rating: this.chosenRating,
                  }
               )
            } catch (error) {
               console.error(error)
               this.error = "Error getting data - please try again later."
            }

            this.enteredName = ""
            this.chosenRating = null
         },
      },
   }
</script>

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
               <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
               <label for="rating-poor">Poor</label>
            </div>
            <div class="form-control">
               <input type="radio" id="rating-average" value="average" name="rating" v-model="chosenRating" />
               <label for="rating-average">Average</label>
            </div>
            <div class="form-control">
               <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
               <label for="rating-great">Great</label>
            </div>
            <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
            <div>
               <BaseButton>Submit</BaseButton>
            </div>
         </form>
      </BaseCard>
   </section>
</template>

<style scoped>
   .form-control {
      margin: 0.5rem 0;
   }
   input[type="text"] {
      display: block;
      width: 20rem;
      margin-top: 0.5rem;
   }
</style>
