const app = Vue.createApp({
   data() {
      return {
         value: 0,
      };
   },
   methods: {
      addNumber(num) {
         this.value = this.value + num;
      },
   },
   computed: {
      result() {
         if (this.value < 37) {
            return "Not there yet";
         } else if (this.value === 37) {
            return this.value;
         } else {
            return "Too much!";
         }
      },
   },
   watch: {
      result() {
         setTimeout(function () {
            this.value = 0;
         }, 5000);
      },
   },
});

app.mount("#assignment");
