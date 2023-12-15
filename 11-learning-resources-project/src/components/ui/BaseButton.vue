<script>
   export default {
      props: ["mode"],
   }
</script>

<template>
   <button :class="mode">
      <slot />
   </button>
</template>

<style scoped>
   button {
      padding: 0.75rem 1.5rem;
      font-family: inherit;
      background-color: #3a0061;
      border: 1px solid #3a0061;
      color: white;
      cursor: pointer;

      &:hover,
      &:active {
         background-color: #5a189a;
         border-color: #5a189a;
      }
   }

   .flat {
      background-color: transparent;
      border: none;
      color: #3a0061;

      &:hover,
      &:active {
         background-color: #edd2ff;
      }
   }
</style>
