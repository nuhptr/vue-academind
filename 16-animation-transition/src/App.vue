<script>
   import BaseModal from "./components/BaseModal.vue"
   import UserList from "./components/UserList.vue"

   export default {
      components: { BaseModal, UserList },
      data() {
         return {
            dialogIsVisible: false,
            isAnimateBlock: false,
            paragraphIsVisible: false,
            usersAreVisible: false,
            enterinterval: null,
            leaveinterval: null,
         }
      },
      methods: {
         enterCancelled(element) {
            console.log(element)
            clearInterval(this.enterInterval)
         },
         leaveCancelled(element) {
            console.log(element)
            clearInterval(this.leaveInterval)
         },
         beforeEnter(element) {
            console.log("beforeEnter")
            console.log(element)
            element.style.opacity = 0
         },
         enter(element, done) {
            console.log("enter")
            console.log(element)

            let round = 1

            this.leaveInterval = setInterval(() => {
               element.style.opacity = 1 - round * 0.01
               round++
               if (round > 10) {
                  clearInterval(this.leaveInterval)
                  done()
               }
            }, 20)
         },
         afterEnter(element) {
            console.log("afterEnter")
            console.log(element)
         },
         beforeLeave(element) {
            console.log("beforeLeave")
            console.log(element)
            element.style.opacity = 1
         },
         leave(el) {
            console.log("leave")
            console.log(el)
         },
         afterLeave(el) {
            console.log("afterLeave")
            console.log(el)
         },
         showUsers() {
            this.usersAreVisible = true
         },
         hideUsers() {
            this.usersAreVisible = false
         },
         animateBlock() {
            this.isAnimateBlock = true
         },
         toogleParagraph() {
            this.paragraphIsVisible = !this.paragraphIsVisible
         },
         showDialog() {
            this.dialogIsVisible = true
         },
         hideDialog() {
            this.dialogIsVisible = false
         },
      },
   }
</script>

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

   button {
      font: inherit;
      padding: 0.5rem 2rem;
      border: 1px solid #810032;
      border-radius: 30px;
      background-color: #810032;
      color: white;
      cursor: pointer;
   }

   button:hover,
   button:active {
      background-color: #a80b48;
      border-color: #a80b48;
   }

   .btn-close {
      margin-top: 1rem;
   }

   .block {
      width: 8rem;
      height: 8rem;
      background-color: #290033;
      margin-bottom: 2rem;
      /* transition: transform 0.3s ease-out; */
   }

   .container {
      max-width: 40rem;
      margin: 2rem auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 2rem;
      border: 2px solid #ccc;
      border-radius: 12px;
   }

   .animate {
      /* transform: translateX(-150px); */
      animation: slide-fade 0.3s ease-out forwards;
   }

   /* Routing transition */
   .route-enter-active,
   .route-enter-from {
      animation: slide-scale 0.4s ease-out;
   }

   .route-enter-to {
   }

   .route-leave-active {
      animation: slide-scale 0.4s ease-in reverse;
   }

   .fade-button-enter-from,
   .fade-button-leave-to {
      opacity: 0;
   }

   .fade-button-enter-active {
      transition: opacity 0.3s ease-out;
   }

   .fade-button-leave-active {
      transition: opacity 0.3s ease-in;
   }

   .fade-button-enter-to,
   .fade-button-leave-from {
      opacity: 1;
   }

   .para-enter-from {
      /* opacity: 0; */
      /* transform: translateY(-30px); */
   }

   .para-enter-active {
      /* transition: all 0.3s ease-out; */
      /* wihout forwards because auto remove */
      animation: slide-scale 2s ease-out;
   }

   .para-leave-to {
      /*
    opacity: 1;
    transform: translateY(0);
     */
   }

   .para-leave-from {
      opacity: 1;
      transform: translateY(0);
   }

   .para-leave-active {
      transition: all 0.3s ease-in;
   }

   .para-leave-to {
      opacity: 0;
      transform: translateY(-30px);
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
