<script>
export default {
   props: {
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
   data() {
      return {
         detailsAreVisible: false,
         friendIsFavorite: this.isFavorite,
      };
   },
   methods: {
      toggleDetails() {
         this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
         this.friendIsFavorite = !this.friendIsFavorite;
      },
   },
};
</script>

<template>
   <li>
      <h2>
         {{ name ? name : "No data" }}
         {{ friendIsFavorite ? "(Favorite)" : "" }}
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
