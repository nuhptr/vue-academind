<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
// import { computed } from "vue"
// import { useStore } from "vuex"

const store = useStore()
const finalCounter = computed(() => store.getters["numbers/finalCounter"])
</script>

<template>
   <h3>{{ finalCounter }}</h3>
</template>
