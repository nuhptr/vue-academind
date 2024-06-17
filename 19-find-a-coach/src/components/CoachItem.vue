<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router"

import BaseBadge from "./BaseBadge.vue"
import BaseButton from "./BaseButton.vue"

const router = useRouter()

const props = defineProps(["id", "firstName", "lastName", "areas", "rate"])

const fullName = computed(() => props.firstName + " " + props.lastName) // "Maximilian Schwarzmüller"
const coachContactLink = computed(
   () => router.currentRoute.value.path + "/" + props.id + "/contact"
) // /coaches/c1/contact
const coachDetailsLink = computed(() => router.currentRoute.value.path + "/" + props.id) // /coaches/c1
</script>

<style scoped>
/* Add your styles here */
</style>

<template>
   <li class="mx-0 my-4 border border-[#424242] rounded-xl p-4">
      <h3 class="mx-0 my-2 text-2xl">{{ fullName }}</h3>
      <h4 class="mx-0 my-2">${{ rate }}/hour</h4>
      <div class="my-[1.2rem] mx-0">
         <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
      </div>
      <div class="my-[1.2rem] mx-0 flex justify-end">
         <BaseButton link mode="outline" :to="coachContactLink">Contact</BaseButton>
         <BaseButton link :to="coachDetailsLink">View Details</BaseButton>
      </div>
   </li>
</template>
