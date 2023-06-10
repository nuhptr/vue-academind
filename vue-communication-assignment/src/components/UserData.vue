<template>
   <section>
      <form @submit.prevent="submitData">
         <input type="text" placeholder="Your name" v-model="enteredName" />
         <input type="text" placeholder="Your age" v-model="enteredAge" />
         <button type="submit">Set User Data</button>
      </form>
   </section>
</template>

<script>
export default {
   emits: ["set-data"],
   data() {
      return {
         enteredName: "",
         enteredAge: 0,
      };
   },
   methods: {
      submitData() {
         this.$emit("set-data", this.enteredName, this.enteredAge);
      },
   },
};
</script>

<style>
html {
   font-family: sans-serif;
}

section {
   margin: 2rem auto;
   max-width: 40rem;
   border-radius: 12px;
   border: 1px solid #ccc;
   padding: 1rem;
}
</style>
