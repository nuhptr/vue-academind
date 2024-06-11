const { ref } = Vue

export default {
   setup() {
      const friends = ref([
         {
            id: "manuel",
            name: "Manuel Lorenz",
            phone: "01234 5678 991",
            email: "manuel@localhost.com",
         },
         {
            id: "julie",
            name: "Julie Jones",
            phone: "09876 543 221",
            email: "julie@localhost.com",
         },
      ])
   },
}

app.component("friend-contact", {
   template: `
     
   `,

   methods: {
      toggleDetails() {
         this.detailsAreVisible = !this.detailsAreVisible
      },
   },
})

app.mount("#app")
