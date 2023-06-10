<template>
   <form action="#">
      <div>
         <label for="name">Name</label>
         <input type="text" name="name" />
      </div>
      <div>
         <label for="phone">Phone</label>
         <input type="tel" name="phone" />
      </div>
      <div>
         <label for="email">Email</label>
         <input type="email" name="email" />
      </div>
      <div>
         <button>Add Contact</button>
      </div>
   </form>
</template>

<script>
export default {
   emits: ["add-contact"],
   data() {
      return {
         enteredName: "",
         enteredPhone: "",
         enteredEmail: "",
      };
   },
};
</script>

<style>
#app input {
   font: inherit;
   padding: 0.15rem;
}
#app label {
   font-weight: bold;
   margin-right: 1rem;
   width: 7rem;
   display: inline-block;
}
#app form div {
   margin: 1rem 0;
}
</style>
