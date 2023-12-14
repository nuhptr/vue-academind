<script>
   import Header from "./components/Header.vue"
   // import CourseGoals from "./components/CourseGoals.vue"
   import ActiveGoals from "./components/ActiveGoals.vue"
   import ManageGoals from "./components/ManageGoals.vue"

   export default {
      components: { Header, ActiveGoals, ManageGoals },
      data() {
         return {
            selectedComponent: "ActiveGoals",
            activeUser: {
               name: "Max Maximiliam",
               description: "I'm a software developer! Site owner and admin of this site.",
               role: "admin",
            },
         }
      },
      methods: {
         setSelectedComponent(component) {
            this.selectedComponent = component
         },
      },
   }
</script>

<template>
   <div>
      <Header />
      <button @click="setSelectedComponent('ActiveGoals')">Active Goals</button>
      <button @click="setSelectedComponent('ManageGoals')">Manage Goals</button>
      <!-- * We repeat same process if we use conditional rendering -->
      <!-- <ActiveGoals v-if="selectedComponent === 'ActiveGoals'" />
      <ManageGoals v-if="selectedComponent === 'ManageGoals'" /> -->
      <!-- * So we can simplified with dynamic component -->
      <KeepAlive>
         <component :is="selectedComponent" />
      </KeepAlive>
   </div>
</template>

<style>
   html {
      font-family: sans-serif;
   }
   body {
      margin: 0;
   }
</style>
