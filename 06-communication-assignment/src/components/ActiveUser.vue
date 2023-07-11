<template>
   <section class="user">
      <h2 class="user__username">{{ checkName }}</h2>
      <h3 class="user__age">{{ checkAge }}</h3>
   </section>
</template>

<script>
export default {
   props: {
      username: {
         type: String,
         required: true,
      },
      userage: {
         type: Number,
         required: true,
      },
   },
   computed: {
      checkName() {
         if (this.username === "") {
            return "Please enter your name";
         } else {
            return this.username;
         }
      },
      checkAge() {
         if (this.userage === 0) {
            return "Please enter your age";
         } else {
            return this.userage;
         }
      },
   },
};
</script>

<style>
section {
   margin: 2rem auto;
   max-width: 40rem;
   border-radius: 12px;
   border: 1px solid #ccc;
}
</style>
