<script setup>
import { ref, shallowRef } from "vue"

import Header from "./components/Header.vue"
// import CourseGoals from "./components/CourseGoals.vue"
import ActiveGoals from "./components/ActiveGoals.vue"
import ManageGoals from "./components/ManageGoals.vue"

const selectedComponent = shallowRef(ManageGoals)
const activeUser = ref({
   name: "Max Maximiliam",
   description: "I'm a software developer! Site owner and admin of this site.",
   role: "admin",
})

const setSelectedComponent = (component) => {
   selectedComponent.value = component
}
</script>

<style>
/* Style goes here */
</style>

<template>
   <div>
      <Header></Header>
      <div class="flex max-w-2xl mx-auto my-10 gap-4">
         <button
            class="px-3 py-3 text-white rounded-md hover:bg-sky-600 bg-sky-500"
            @click="setSelectedComponent(ActiveGoals)"
         >
            Active Goals
         </button>
         <button
            class="px-3 py-3 text-white rounded-md hover:bg-sky-600 bg-sky-500"
            @click="setSelectedComponent(ManageGoals)"
         >
            Manage Goals
         </button>
      </div>

      <!-- * We repeat same process if we use conditional rendering -->
      <!-- <ActiveGoals v-if="selectedComponent === 'ActiveGoals'" /> -->
      <!-- <ManageGoals v-if="selectedComponent === 'ManageGoals'" />  -->

      <!-- * So we can simplified with dynamic component -->
      <KeepAlive>
         <component :is="selectedComponent"></component>
      </KeepAlive>
   </div>
</template>
