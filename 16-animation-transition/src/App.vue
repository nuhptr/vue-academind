<script setup>
import { ref } from "vue"

import BaseModal from "./components/BaseModal.vue"
import UserList from "./components/UserList.vue"

const dialogIsVisible = ref(false)
const isAnimateBlock = ref(false)
const paragraphIsVisible = ref(false)
const usersAreVisible = ref(false)
const enterInterval = ref(null)
const leaveInterval = ref(null)

const enterCancelled = (element) => {
    console.log(element)
    clearInterval(enterInterval.value)
}

const leaveCancelled = (element) => {
    console.log(element)
    clearInterval(leaveInterval.value)
}

const beforeEnter = (element) => {
    console.log("beforeEnter")
    console.log(element)
    element.style.opacity = 0
}

const enter = (element, done) => {
    console.log("enter")
    console.log(element)

    let round = 1

    leaveInterval.value = setInterval(() => {
        element.style.opacity = 1 - round * 0.01
        round++
        if (round > 10) {
            clearInterval(leaveInterval.value)
            done()
        }
    }, 20)
}

const afterEnter = (element) => {
    console.log("afterEnter")
    console.log(element)
}

const beforeLeave = (element) => {
    console.log("beforeLeave")
    console.log(element)
    element.style.opacity = 1
}

const leave = (element) => {
    console.log("leave")
    console.log(element)
}

const afterLeave = (element) => {
    console.log("afterLeave")
    console.log(element)
}

const showUsers = () => {
    usersAreVisible.value = true
}

const hideUsers = () => {
    usersAreVisible.value = false
}

const animateBlock = () => {
    isAnimateBlock.value = true
}

const toogleParagraph = () => {
    paragraphIsVisible.value = !paragraphIsVisible.value
}

const showDialog = () => {
    dialogIsVisible.value = true
}

const hideDialog = () => {
    dialogIsVisible.value = false
}
</script>

<style>
* {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
}

.btn-close {
    @apply mt-4;
}

.block {
    @apply w-32 h-32 bg-purple-600 mb-8;
    /* transition: transform 0.3s ease-out; */
}

.animate {
    /* transform: translateX(-150px); */
    @apply animate-[slide-fade] duration-300 ease-out;
    animation: forwards;
}

/* Routing transition */
.route-enter-active,
.route-enter-from {
    @apply animate-[slide-scale] duration-[400ms] ease-out;
}

.route-enter-to {
    /* When route enter */
}

.route-leave-active {
    @apply animate-[slide-scale] duration-[400ms] ease-in;
    animation: reverse;
}

.fade-button-enter-from,
.fade-button-leave-to {
    @apply opacity-0;
}

.fade-button-enter-active {
    @apply transition-opacity duration-300 ease-out;
}

.fade-button-leave-active {
    @apply transition-opacity duration-300 ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
    @apply opacity-100;
}

.para-enter-from {
    /* opacity: 0; */
    /* transform: translateY(-30px); */
}

.para-enter-active {
    /* transition: all 0.3s ease-out; */
    /* wihout forwards because auto remove */
    @apply animate-[slide-fade] duration-200 ease-out;
}

.para-leave-to {
    /*
    opacity: 1;
    transform: translateY(0);
     */
}

.para-leave-from {
    @apply opacity-100 transform translate-y-0;
}

.para-leave-active {
    @apply transition-all duration-300 ease-in;
}

.para-leave-to {
    @apply opacity-0 transform translate-y-[-30px];
}

@keyframes slide-scale {
    0% {
        transform: translateX(0) scale(1);
    }

    70% {
        transform: translateX(-120px) scale(1.1);
    }

    100% {
        transform: translateX(-150px) scale(1);
    }
}
</style>

<template>
    <RouterView v-slot="slotProps">
        <Transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
        </Transition>
    </RouterView>

    <!-- <div class="container">
        <UserList></UserList>
    </div>
    <div class="container">
        <div class="block"></div>
        <button @click="animateBlock" :class="{ animate: isAnimateBlock }">Animate</button>
    </div> -->

    <!-- <div class="container">
        // disable css animation :css="false"
        <transition :css="false" name="para" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
            @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled"
            @leave-cancelled="leaveCancelled">
            <p v-if="paragraphIsVisible">This is only sometimes visible...</p>
        </transition>
        <button @click="toogleParagraph">Toogle Paragraph</button>
    </div> -->

    <!-- <div class="container">
        <transition name="fade-button" mode="out-in">
            <button @click="showUsers" v-if="!usersAreVisible">Show User</button>
            <button @click="hideUsers" v-else>Hide User</button>
        </transition>
    </div>

    <BaseModal @close="hideDialog" :open="dialogIsVisible">
        <p>This is a test dialog!</p>
        <button class="btn-close" @click="hideDialog">Close it!</button>
    </BaseModal>

    <div class="container">
        <button @click="showDialog">Show Dialog</button>
    </div> -->
</template>
