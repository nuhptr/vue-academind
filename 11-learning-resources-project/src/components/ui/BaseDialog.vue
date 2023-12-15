<script>
   import BaseButton from "./BaseButton.vue"

   export default {
      components: { BaseButton },
      emits: ["close"],
      props: { title: { type: String, required: true } },
   }
</script>

<template>
   <Teleport to="body">
      <div @click="$emit('close')"></div>
      <dialog open>
         <header>
            <slot name="header">
               <h2>{{ title }}</h2>
            </slot>
         </header>
         <section>
            <slot></slot>
         </section>
         <menu>
            <slot name="action">
               <BaseButton @click="$emit('close')">Close</BaseButton>
            </slot>
         </menu>
      </dialog>
   </Teleport>
</template>

<style scoped>
   div {
      z-index: 10;
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.75);
   }
   dialog {
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: none;
      position: fixed;
      top: 20vh;
      left: 10%;
      width: 80%;
      z-index: 100;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

      @media (min-width: 768px) {
         left: calc(50% - 20rem);
         width: 40rem;
      }
   }
   header {
      background-color: #3a0061;
      color: white;
      width: 100%;
      padding: 1rem;

      & h2 {
         margin: 0;
      }
   }
   section {
      padding: 1rem;
   }
   menu {
      display: flex;
      justify-content: flex-end;
      padding: 1rem;
      margin: 0;
   }
</style>
