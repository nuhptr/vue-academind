<script setup>
import { computed } from "vue"

const props = defineProps(["id", "name", "memberCount"])

const teamMembersLink = computed(() => {
   return { name: "team-members", params: { teamId: props.id }, query: { sort: "asc" } }
})
</script>

<style scoped>
/* Add your styles here */
</style>

<template>
   <li class="p-4 mx-0 my-4 rounded-md shadow-md">
      <h3 class="mx-0 my-2 text-xl">{{ name }}</h3>
      <div class="mx-0 my-2">{{ memberCount }} members</div>
      <RouterLink
         class="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-700"
         :to="teamMembersLink"
      >
         View Details
      </RouterLink>
   </li>
</template>
