<script setup>
import { ref, provide, computed, shallowRef } from "vue"

import BaseButton from "../ui/BaseButton.vue"
import BaseCard from "../ui/BaseCard.vue"
import StoredResource from "./StoredResource.vue"
import AddResource from "./AddResource.vue"

// Variables
const selectedTab = shallowRef(StoredResource)
const storedResources = ref([
   {
      id: 1,
      title: "Learn Vue",
      description: "Learn Vue in 30 minutes",
      link: "https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance",
   },
   {
      id: 2,
      title: "Learn CSS",
      description: "Learn CSS in 30 minutes",
      link: "https://www.udemy.com/course/the-complete-css-mastery-course/",
   },
   {
      id: 3,
      title: "Learn HTML",
      description: "Learn HTML in 30 minutes",
      link: "https://www.udemy.com/course/html-and-css-basics-to-advance-with-real-website-designs/",
   },
])

// Computed
const storedResButtonMode = computed(() => {
   return selectedTab.value === StoredResource ? null : "flat"
})

const addResButtonMode = computed(() => {
   return selectedTab.value === AddResource ? null : "flat"
})

// Functions
const setSelectTab = (tab) => {
   selectedTab.value = tab
}

const addResource = (title, description, url) => {
   const newResource = {
      id: new Date().toISOString(),
      title: title,
      description: description,
      link: url,
   }
   storedResources.value.unshift(newResource)
   selectedTab.value = StoredResource
}

const removeResource = (id) => {
   const resIndex = storedResources.value.findIndex((res) => res.id === id)
   storedResources.value.splice(resIndex, 1)
}

// Provide
provide("storedResources", storedResources)
provide("selectedTab", selectedTab)

provide("addResource", addResource)
provide("removeResource", removeResource)
</script>

<template>
   <BaseCard class="flex items-center gap-4">
      <BaseButton @click="setSelectTab(StoredResource)" :mode="storedResButtonMode">
         Stored Resources
      </BaseButton>
      <BaseButton @click="setSelectTab(AddResource)" :mode="addResButtonMode">
         Add Resources
      </BaseButton>
   </BaseCard>

   <KeepAlive>
      <component :is="selectedTab" />
   </KeepAlive>
</template>
