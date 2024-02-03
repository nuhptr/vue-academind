<template>
   <section class="container">
      <h2>{{ userName }}</h2>
      <h3>{{ age }}</h3>
      <p>{{ bio.name }}</p>
      <p>{{ bio.age }}</p>
      <button @click="changeAge">Change Age</button>

      <div>
         <input type="text" placeholder="First Name" v-model="firstName" />
         <input type="text" placeholder="Last Name" v-model="lastName" />
      </div>
      <p>{{ fullName }}</p>
   </section>
</template>

<script setup>
   import { ref, reactive, isReactive, isRef, computed, watch } from "vue"

   const userName = ref("Maximilian")
   const age = ref(31)
   const bio = reactive({ name: "adi", age: 23 })

   const firstName = ref("")
   const lastName = ref("")

   console.log(isRef(userName))
   console.log(isRef(age))
   console.log(isReactive(bio))

   setTimeout(() => {
      userName.value = "Max"
      age.value = 32

      // If you want to change the value of reactive object
      bio.name = "Nugraha"
      bio.age = 24
   }, 2000)

   const changeAge = () => {
      age.value += 1
   }

   watch([age, userName], (newValue, oldValue) => {
      console.log("Old age: " + oldValue[0])
      console.log("New age: " + newValue[0])
      console.log("Old name: " + oldValue[1])
      console.log("New name: " + newValue[1])
   })

   //    const changeFirstName = (event) => {
   //       firstName.value = event.target.value
   //    }

   //    const changeLastName = (event) => {
   //       lastName.value = event.target.value
   //    }

   const fullName = computed(() => {
      return firstName.value + "" + lastName.value
   })

   //    export default {
   //       data() {
   //          return {
   //             userName: "Maximilian",
   //          }
   //       },
   //    }
</script>

<style>
   * {
      box-sizing: border-box;
   }

   html {
      font-family: sans-serif;
   }

   body {
      margin: 0;
   }

   .container {
      margin: 3rem auto;
      max-width: 30rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      padding: 1rem;
      text-align: center;
   }
</style>
