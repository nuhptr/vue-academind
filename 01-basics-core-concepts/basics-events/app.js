const app = Vue.createApp({
   data() {
      return {
         counter: 0,
         name: "",
         lastName: "",
         // fullName: "",
      };
   },
   // watch: {
   //    name(value) {
   //       if (value === "") {
   //          this.fullname = "";
   //       }
   //       this.fullName = value + " " + "Nugraha";
   //    },
   // },
   computed: {
      fullName() {
         console.log("Running again...");
         if (this.name === "" || this.lastName === "") {
            return "";
         }
         return this.name + " " + this.lastName;
      },
   },
   methods: {
      submitForm(event) {
         alert("Submitted!");
      },
      add(num) {
         this.counter = this.counter + num;
      },
      reduce(num) {
         if (this.counter <= 0) {
            this.counter = 0;
         } else {
            this.counter = this.counter - num;
         }
      },
      setName(event) {
         this.name = event.target.value;
      },
      clearInput() {
         this.name = "";
      },
   },
});

app.mount("#events");
