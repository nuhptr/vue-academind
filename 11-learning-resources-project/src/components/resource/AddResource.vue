<script>
   import BaseButton from "../ui/BaseButton.vue"
   import BaseCard from "../ui/BaseCard.vue"

   export default {
      components: { BaseCard, BaseButton },
   }
</script>

<template>
   <BaseCard>
      <form action="">
         <div class="form-control">
            <label for="title">Title</label>
            <input id="title" name="title" type="text" required />
         </div>
         <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="3" required></textarea>
         </div>
         <div class="form-control">
            <label for="link">Link</label>
            <input id="link" name="link" type="url" required />
         </div>
         <div>
            <BaseButton type="submit">Add Resource</BaseButton>
         </div>
      </form>
   </BaseCard>
</template>

<style>
   .form-control {
      margin: 1rem 0;
   }
   label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
   }
   input,
   textarea {
      display: block;
      width: 100%;
      font: inherit;
      padding: 0.15rem;
      border: 1px solid #ccc;
   }
   input:focus,
   textarea:focus {
      outline: none;
      border-color: #3a0061;
      background-color: #f7ebff;
   }
</style>
