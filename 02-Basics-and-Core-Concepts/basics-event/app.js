const app = Vue.createApp({
   data() {
      return {
         counter: 10,
         name: "",
         confirmedName: "",
      }
   },
   computed: {
      fullName() {
         console.log("Running again...")
         if (this.name === "") return ""
         return this.name + " " + "Nugraha"
      },
   },
   methods: {
      confirmInput() {
         this.confirmedName = this.name
      },
      resetInput() {
         this.name = ""
      },
      submitForm() {
         alert("Submitted!")
      },
      setName(event, lastName) {
         this.name = event.target.value + " " + lastName
      },
      // giving arguments
      add(num) {
         this.counter = this.counter + num
      },
      reduce(num) {
         this.counter = this.counter - num
         if (this.counter < 0) this.counter = 0
      },
   },
})

app.mount("#events")
