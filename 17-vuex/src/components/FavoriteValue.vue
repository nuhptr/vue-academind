<script setup>
import { useStore } from "vuex"
import { computed } from "vue"

const store = useStore()

const counter = computed(() => store.getters["numbers/normalizedCounter"])
</script>

<template>
   <div class="flex flex-col items-center">
      <h3>Favorite Value: {{ counter }}</h3>
      <p>We do more...</p>
   </div>
</template>
