<script setup>
const props = defineProps(["modelValue"])
const emit = defineEmits(["update:modelValue"])

const activate = (value) => {
   console.log(value)
   emit("update:modelValue", value)
}

const computedClasses = (value) => {
   switch (value) {
      case "poor":
         return { "border-[#a00078]": props.modelValue === value }
      case "average":
         return { "border-[#a00078]": props.modelValue === value }
      case "great":
         return { "border-[#a00078]": props.modelValue === value }
   }
}
</script>

<style scoped>
button {
   font: inherit;
}
</style>

<template>
   <ul class="flex list-none my-[0.5rem] mx-0 p-0 gap-x-4 items-center justify-start">
      <li class="p-4 m-0 border" :class="computedClasses('poor')">
         <button
            class="text-[#a00078] border-none bg-transparent cursor-pointer"
            type="button"
            @click="activate('poor')"
         >
            Poor
         </button>
      </li>

      <li class="p-4 m-0 border" :class="computedClasses('average')">
         <button
            class="text-[#a00078] border-none bg-transparent cursor-pointer"
            type="button"
            @click="activate('average')"
         >
            Average
         </button>
      </li>

      <li class="p-4 m-0 border" :class="computedClasses('great')">
         <button
            class="text-[#a00078] border-none bg-transparent cursor-pointer"
            type="button"
            @click="activate('great')"
         >
            Great
         </button>
      </li>
   </ul>
</template>
