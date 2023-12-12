<script>
   export default {
      // define the props that this component expects to receive
      props: {
         id: { type: String, required: true },
         name: { type: String, required: true },
         phoneNumber: { type: String, required: true },
         emailAddress: { type: String, required: true },
         isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: (value) => value === "0" || value === "1",
         },
      },

      //* define the events that this component emits
      emits: ["toogleFavorite", "deleteFriend"],
      data() {
         return {
            detailsAreVisible: false,
         }
      },
      methods: {
         toogleFavorite() {
            this.$emit("toogleFavorite", this.id)
         },
         toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
         },
      },
   }
</script>

<template>
   <li>
      <h2>{{ name }} {{ isFavorite ? "- (Favorite)" : "" }}</h2>
      <button @click="toogleFavorite" style="margin-right: 20px">Is favorite</button>
      <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
      <ul v-if="detailsAreVisible">
         <li><strong>Phone:</strong> {{ phoneNumber }}</li>
         <li><strong>Email:</strong> {{ emailAddress }}</li>
      </ul>
      <button @click="$emit('deleteFriend', id)" style="margin-left: 20px">Delete</button>
   </li>
</template>
