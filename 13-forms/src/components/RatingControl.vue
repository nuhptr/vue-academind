<script>
export default {
   props: ["modelValue"],
   emits: ["update:modelValue"],
   methods: {
      activate(option) {
         // this.activeOption = option
         this.$emit("update:modelValue", option)
      },
   },
   // data() {
   //   return {
   //      activeOption: this.modelValue,
   //   }
   // },
   // computed: {
   //   activeOption() {
   //      return this.modelValue
   //   },
   // },
}
</script>

<template>
   <ul>
      <li :class="{ active: modelValue === 'poor' }">
         <button type="button" @click="activate('poor')">Poor</button>
      </li>
      <li :class="{ active: modelValue === 'average' }">
         <button type="button" @click="activate('average')">Average</button>
      </li>
      <li :class="{ active: modelValue === 'great' }">
         <button type="button" @click="activate('great')">Great</button>
      </li>
   </ul>
</template>

<style scoped>
.active {
   border-color: #a00078;

   & button {
      color: #a00078;
   }
}

ul {
   display: flex;
   list-style: none;
   margin: 0.5rem 0;
   padding: 0;
   gap: 1rem;
   justify-content: start;
   align-items: center;
}

li {
   margin: 0;
   border: 1px solid #ccc;
   padding: 1rem;
}

button {
   font: inherit;
   border: none;
   background-color: transparent;
   cursor: pointer;
}
</style>
