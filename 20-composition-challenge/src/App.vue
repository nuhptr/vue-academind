<script setup>
import { ref, reactive, isReactive, isRef } from "vue"

//  const courseGoal = ref("Finish the course and learn Vue!")
//  const toggleGoal = ref(true)
const courseData = ref({
    goal: "Finish the course and learn Vue!",
    goalVisibility: false,
})

console.log(isRef(courseGoal))
console.log(isReactive(toggleGoal))

const changeGoal = () => {
    courseGoal.value = "Master Vue and build amazing apps!"
}

const toggle = () => {
    courseData.value.goalVisibility = !courseData.value.goalVisibility
}
</script>

<style>
html {
    font-family: sans-serif;
}
body {
    margin: 3rem;
    text-align: center;
}
</style>

<template>
    <h2>My Course Goal</h2>
    <!-- Task 1: Output your main course goal with help of the composition API -->
    <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
    <p v-if="courseData.value.goalVisibility">{{ courseGoal }}</p>
    <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
    <button @click="toggle">Toggle Goal</button>
    <!-- Task 3: Manage data in three ways -->
    <!-- => Separate refs -->
    <!-- => Ref Object -->
    <!-- => Reactive Object -->
    <!-- Task 4: Also solve the assignment with the Options API -->
</template>
