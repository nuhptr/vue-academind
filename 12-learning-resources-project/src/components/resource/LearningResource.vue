<script setup>
import { inject } from "vue"

import BaseButton from "../ui/BaseButton.vue"
import BaseCard from "../ui/BaseCard.vue"

const props = defineProps(["data"])

const removeResource = inject("removeResource")
</script>

<style scoped>
/* Style goes here */
</style>

<template>
   <li class="m-auto max-w-[40rem]">
      <BaseCard>
         <header class="flex items-center justify-between">
            <h3 class="text-xl mx-0 my-[0.5rem]">{{ props.data.title }}</h3>
            <BaseButton mode="flat" @click="removeResource(props.data.id)">Delete</BaseButton>
         </header>

         <p class="my-[0.5rem] mx-0">{{ props.data.description }}</p>

         <nav>
            <a
               class="text-orange-600 hover:text-orange-700"
               :href="props.data.link"
               target="_blank"
               noopener
               noreferrer
            >
               View Resource
            </a>
         </nav>
      </BaseCard>
   </li>
</template>
