<script setup>
import { ref, watch, computed, defineProps, defineEmits } from "vue"

import UserItem from "./UserItem.vue"
import BaseContainer from "./BaseContainer.vue"
import BaseSearch from "./BaseSearch.vue"

// Props
const props = defineProps(["users"])
// emits
const emit = defineEmits(["list-projects"])

// Refs
const enteredSearchTerm = ref("")
const activeSearchTerm = ref("")
const sorting = ref(null)

const updateSearch = (newValue) => {
   enteredSearchTerm.value = newValue
}
const sort = (mode) => {
   sorting.value = mode
}

const availableUsers = computed(() => {
   let users = []
   if (activeSearchTerm.value) {
      users = props.users.filter((usr) => usr.fullName.includes(activeSearchTerm.value))
   } else if (users) {
      users = props.users
   }
   return users
})
const displayedUsers = computed(() => {
   if (!sorting.value) return availableUsers.value

   return availableUsers.value.slice().sort((u1, u2) => {
      if (sorting.value === "asc" && u1.fullName > u2.fullName) return 1
      else if (sorting.value === "asc") return -1
      else if (sorting.value === "desc" && u1.fullName > u2.fullName) return -1
      else return 1
   })
})

// Watchers
watch(enteredSearchTerm, (newValue) => {
   setTimeout(() => {
      if (newValue === enteredSearchTerm.value) activeSearchTerm.value = newValue
   }, 300)
})
</script>

<style scoped>
ul {
   @apply list-none m-0 p-0;
}
</style>

<template>
   <base-container>
      <h2>Active Users</h2>
      <base-search @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
      <div>
         <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
            Sort Ascending
         </button>
         <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
            Sort Descending
         </button>
      </div>
      <ul>
         <user-item
            v-for="user in displayedUsers"
            :key="user.id"
            :userName="user.fullName"
            :id="user.id"
            @list-projects="emit('list-projects', $event)"
         ></user-item>
      </ul>
   </base-container>
</template>
