<script>
export default {
   data() {
      return {
         dataAreVisible: false,
         friend: {
            id: "manuel",
            name: "Manuel Lorenz",
            phone: "01234 5678 991",
            email: "",
         },
      }
   },
   methods: {
      toggleDetails() {
         this.dataAreVisible = !this.dataAreVisible
      },
   },
}
</script>

<template>
   <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ dataAreVisible ? "Hide" : "Show" }} Details</button>
      <ul v-if="dataAreVisible">
         <li><strong>Phone:</strong> {{ friend.phone }}</li>
         <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
   </li>
</template>
