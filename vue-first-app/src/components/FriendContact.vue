<script>
export default {
   props: {
      id: {
         type: String,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      phoneNumber: {
         type: String,
         required: true,
      },
      emailAddress: {
         type: String,
         required: true,
      },
      isFavorite: {
         type: Boolean,
         required: true,
         default: false,
         // Validating the value of isFavorite
         validator: function (value) {
            return value === true || value === false;
         },
      },
   },
   // defining and validating custom events
   emits: {
      "toggle-favorite": function (id) {
         if (id) {
            console.info("id " + id);
            return true;
         } else {
            console.warn("No id provided for toggle-favorite event");
            return false;
         }
      },
   },
   data() {
      return {
         detailsAreVisible: false,
      };
   },
   methods: {
      toggleDetails() {
         this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
         this.$emit("toggle-favorite", this.id);
      },
   },
};
</script>

<template>
   <li>
      <h2>
         {{ name ? name : "No data" }}
         {{ isFavorite ? "(Favorite)" : "" }}
      </h2>
      <button style="margin-right: 1rem" @click="toggleFavorite">
         Favorite?
      </button>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="detailsAreVisible">
         <li>
            <strong>Phone:</strong>
            {{ phoneNumber ? phoneNumber : "No data" }}
         </li>
         <li>
            <strong>Email:</strong>
            {{ emailAddress ? emailAddress : "No data" }}
         </li>
      </ul>
   </li>
</template>
