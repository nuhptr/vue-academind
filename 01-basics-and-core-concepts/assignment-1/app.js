const app = Vue.createApp({
   data() {
      return {
         name: "Rafael",
         age: 25,
         imageUrl:
            "https://i.pinimg.com/564x/c8/97/86/c897864e74049d2cf99366886992d852.jpg",
      };
   },
   methods: {
      agePlusFive() {
         return this.age + 5;
      },
      randomNumber() {
         return Math.random();
      },
   },
});

app.mount("#assignment");
