<template>
   <base-container v-if="user">
      <h2>{{ user.fullName }}: Projects</h2>
      <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>

      <ul v-if="hasProjects">
         <project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
      </ul>
      <h3 v-else>No projects found.</h3>
   </base-container>

   <base-container v-else>
      <h3>No user selected.</h3>
   </base-container>
</template>

<script setup>
   import { defineProps, computed, ref, watch, toRefs } from "vue"

   import ProjectItem from "./ProjectItem.vue"
   import BaseContainer from "./BaseContainer.vue"
   import BaseSearch from "./BaseSearch.vue"

   // props
   const props = defineProps(["user"])

   // refs
   const enteredSearchTerm = ref("")
   const activeSearchTerm = ref("")

   const updateSearch = (newVal) => {
      enteredSearchTerm.value = newVal
   }

   const hasProjects = computed(() => {
      return props.user.projects && props.user.projects.length > 0
   })
   const availableProjects = computed(() => {
      if (activeSearchTerm.value)
         return props.user.projects.filter((project) => project.title.includes(activeSearchTerm.value))

      return props.user.projects
   })

   watch(enteredSearchTerm, (newValue) => {
      setTimeout(() => {
         if (newValue === enteredSearchTerm.value) activeSearchTerm.value = newValue
      }, 300)
   })

   // const propsWithRefs = toRefs(props)
   // const user = propsWithRefs.user

   const { user } = toRefs(props)
   watch(user, () => {
      enteredSearchTerm.value = ""
   })
</script>

<style scoped>
   ul {
      list-style: none;
      margin: 0;
      padding: 0;
   }
</style>
