const app = Vue.createApp({
   data() {
      return {
         counter: 0,
      }
   },
   methods: {
      add() {
         this.counter = this.counter + 1
      },
      reduce() {
         this.counter = this.counter - 1
         if (this.counter < 0) this.counter = 0
      },
   },
})

app.mount("#events")
