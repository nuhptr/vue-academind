<script>
   import BaseButton from "./BaseButton.vue"

   export default {
      components: { BaseButton },
      data() {
         return {
            firstname: "",
            lastname: "",
            description: "",
            rate: null,
            areas: [],
         }
      },
      methods: {
         submitForm() {
            const formData = {
               firstName: this.firstName,
               lastName: this.lastName,
               description: this.description,
               hourlyRate: this.rate,
               areas: this.areas,
            }

            console.log(formData)
         },
      },
   }
</script>

<template>
   <form @submit.prevent="submitForm">
      <div class="form-control">
         <label for="firstname">Firstname</label>
         <input type="text" id="firstname" v-model="firstName" />
      </div>
      <div class="form-control">
         <label for="lastname">Lastname</label>
         <input type="text" id="lastname" v-model="lastName" />
      </div>
      <div class="form-control">
         <label for="description">Description</label>
         <textarea id="description" rows="5" v-model="description"></textarea>
      </div>
      <div class="form-control">
         <label for="rate">Hourly Rate</label>
         <input type="number" id="rate" v-model.number="rate" />
      </div>
      <div class="form-control">
         <h3>Areas of Expertise</h3>
         <div>
            <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
            <label for="frontend">Frontend Development</label>
         </div>
         <div>
            <input type="checkbox" id="backend" value="backend" v-model="areas" />
            <label for="backend">Backend Development</label>
         </div>
         <div>
            <input type="checkbox" id="career" value="career" v-model="areas" />
            <label for="career">Career Advisory</label>
         </div>
      </div>
      <BaseButton>Register</BaseButton>
   </form>
</template>
