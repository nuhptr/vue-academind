<script>
   export default {
      data() {
         return {
            enteredName: "",
            enteredPhone: "",
            enteredEmail: "",
         }
      },
      emits: ["addContact"],
      methods: {
         submitData() {
            const contactData = { name: this.enteredName, phone: this.enteredPhone, email: this.enteredEmail }
            this.$emit("addContact", contactData)
            this.enteredName = ""
            this.enteredPhone = ""
            this.enteredEmail = ""
         },
      },
   }
</script>

<template>
   <!-- * For submit and preventDefault() window screen -->
   <form @submit.prevent="submitData">
      <div>
         <label for="name">Name</label>
         <input type="text" v-model="enteredName" />
      </div>
      <div>
         <label for="phone">Phone</label>
         <input type="tel" v-model="enteredPhone" />
      </div>
      <div>
         <label for="email">E-Mail</label>
         <input type="email" v-model="enteredEmail" />
      </div>
      <button>Add Contact</button>
   </form>
</template>
