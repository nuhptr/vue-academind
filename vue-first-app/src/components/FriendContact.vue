<script>
export default {
   props: {
      name: {
         type: String,
         required: true,
      },
      phone_number: {
         type: String,
         required: true,
      },
      emailAddress: {
         type: String,
         required: true,
      },
      isFavorite: {
         type: String,
         required: true,
         default: "0",
         // Validating the value of isFavorite
         validator: function (value) {
            return value === "0" || value === "1";
         },
      },
   },
   data() {
      return {
         detailsAreVisible: false,
         friend: {
            id: "manuel",
            name: "Manuel Lorenz",
            phone: "0123 45678 90",
            email: "manuel@localhost.com",
         },
         friendIsFavorite: this.isFavorite,
      };
   },
   methods: {
      toggleDetails() {
         this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
         if (this.friendIsFavorite === "1") {
            this.friendIsFavorite = "0";
         } else {
            this.friendIsFavorite = "1";
         }
      },
   },
};
</script>

<template>
   <li>
      <h2>
         {{ name ? name : "No data" }}
         {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}
      </h2>
      <button style="margin-right: 1rem" @click="toggleFavorite">
         Favorite?
      </button>
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="detailsAreVisible">
         <li>
            <strong>Phone:</strong>
            {{ phone_number ? phone_number : "No data" }}
         </li>
         <li>
            <strong>Email:</strong>
            {{ emailAddress ? emailAddress : "No data" }}
         </li>
      </ul>
   </li>
</template>
