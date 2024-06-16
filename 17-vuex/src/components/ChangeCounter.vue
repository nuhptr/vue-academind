<script setup>
import { mapActions, useStore } from "vuex"

// const store = useStore()
// const addOne = () => {
//    store.dispatch("increment")
// }
// const addOneActions = mapActions(["increment", "increase"])

const store = useStore()

// When use namespace, specify actions and mutations with the namespace
const actions = mapActions("numbers", { increment: "increment", increase: "increase" })

const inc = () => {
   store.dispatch({ type: "numbers/increase", value: 2 })
}
const increase = (payload) => {
   store.dispatch({ type: "numbers/increase", value: payload.value })
}
</script>

<template>
   <div class="flex items-center gap-4">
      <button @click="inc">Add 2</button>
      <button @click="increase({ value: 10 })">Add 10</button>
   </div>
</template>
