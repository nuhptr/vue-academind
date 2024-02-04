<template>
   <div>
      <goals-list :goals="filteredGoals"></goals-list>
      <add-goal @add-goal="addGoal"></add-goal>
   </div>
</template>

<script setup>
   import { ref, computed } from "vue"

   import GoalsList from "./GoalsList.vue"
   import AddGoal from "./AddGoal.vue"

   const goals = ref([])

   const filteredGoals = computed(function () {
      return goals.value.filter((goal) => !goal.text.includes("Angular") && !goal.text.includes("React"))
   })
   const addGoal = (text) => {
      const newGoal = {
         id: new Date().toISOString(),
         text: text,
      }
      goals.value.push(newGoal)
   }
</script>
