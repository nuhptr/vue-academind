const app = Vue.createApp({
   data() {
      return {
         input: "",
         input2: "",
      };
   },
   methods: {
      showAlert() {
         alert("Clicked me!");
      },
      showInput(event) {
         this.input = event.target.value;
      },
      showInputEnter(event) {
         this.input2 = event.target.value;
      },
   },
});

app.mount("#assignment");
