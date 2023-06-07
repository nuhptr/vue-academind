const app = Vue.createApp({
   data() {
      return {
         inputText: "",
         tasks: [],
         taskListIsVisible: true,
      };
   },
   computed: {
      buttonCaption() {
         return this.taskListIsVisible ? "Hide List" : "Show List";
      },
   },
   methods: {
      addTask() {
         this.tasks.push(this.inputText);
      },
      tooglerTaskList() {
         this.taskListIsVisible = !this.taskListIsVisible;
      },
   },
   watch: {},
});

app.mount("#assignment");
