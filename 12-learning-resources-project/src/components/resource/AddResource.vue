<script>
import BaseButton from "../ui/BaseButton.vue"
import BaseCard from "../ui/BaseCard.vue"
import BaseDialog from "../ui/BaseDialog.vue"

export default {
   components: { BaseCard, BaseButton, BaseDialog },
   data() {
      return {
         inputIsInvalid: false,
      }
   },
   inject: ["addResource", "selectedTab"],
   methods: {
      submitData() {
         let enteredTitle = this.$refs.titleInput.value
         let enteredDescription = this.$refs.descInput.value
         let enteredLink = this.$refs.linkInput.value

         if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredLink.trim() === "") {
            this.inputIsInvalid = true
            return
         }

         this.addResource(enteredTitle, enteredDescription, enteredLink)
         this.selectedTab = "StoredResource"
      },
      confirmError() {
         this.inputIsInvalid = false
      },
   },
}
</script>

<template>
   <BaseDialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
      <template #default>
         <p>Unfornately, at least one input value is invalid.</p>
         <p style="line-height: 2">
            Please check all inputs and make sure you enter at least a few characters into each input field active
         </p>
      </template>
      <template #action>
         <BaseButton @click="confirmError">Confirm</BaseButton>
      </template>
   </BaseDialog>

   <BaseCard>
      <form @submit.prevent="submitData">
         <div class="form-control">
            <label for="title">Title</label>
            <input id="title" name="title" type="text" ref="titleInput" />
         </div>
         <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="3" ref="descInput"></textarea>
         </div>
         <div class="form-control">
            <label for="link">Link</label>
            <input id="link" name="link" type="url" ref="linkInput" />
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
}</style>
