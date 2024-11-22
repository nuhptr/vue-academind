<script setup>
import { ref, reactive, isReactive, isRef, computed, watch, provide } from "vue"

import UserData from "./components/UserData.vue"

const userName = ref("Maximilian")
const age = ref(31)
const bio = reactive({ name: "adi", age: 23 })

const firstName = ref("")
const lastName = ref("")
const lastNameInput = ref(null)
const uAge = ref(23)

// to provide the value to the child component
provide("userAge", uAge)

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

const setLastName = () => {
    lastName.value = this.$refs.lastNameInput.value
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
.container {
    @apply mx-auto my-[3rem] max-w-[30rem] rounded-xl shadow-md p-4 text-center;
}
</style>

<template>
    <section class="container">
        <!--
      <h2>{{ userName }}</h2>
      <h3>{{ age }}</h3>
      <p>{{ bio.name }}</p>
      <p>{{ bio.age }}</p>
      -->

        <UserData :first-name="firstName" :last-name="lastName" :age="age" />
        <button @click="changeAge">Change Age</button>

        <div>
            <input type="text" placeholder="First Name" v-model="firstName" />
            <input type="text" placeholder="Last Name" ref="lastNameInput" />
            <button @click="setLastName">Set Last Name</button>
        </div>
        <p>{{ fullName }}</p>
    </section>
</template>
