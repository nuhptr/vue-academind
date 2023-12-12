<script>
   import FriendContact from "./components/FriendContact.vue"

   export default {
      components: { FriendContact },
      data() {
         return {
            friends: [
               {
                  id: "manuel",
                  name: "Manuel Lorenz",
                  phone: "0123 45678 90",
                  email: "manuel@localhost.com",
               },
               {
                  id: "julie",
                  name: "Julie Jones",
                  phone: "0987 654421 21",
                  email: "julie@localhost.com",
               },
            ],
         }
      },
   }
</script>

<template>
   <section>
      <header>
         <h1>My Friends</h1>
      </header>
      <ul>
         <FriendContact name="Manuel Lorenz" phoneNumber="0123 45678 90" emailAddress="manuel@localhost.com" />
         <FriendContact name="JulieJonas" phoneNumber="0981 329 128" emailAddress="julie@localhost.com" />
      </ul>
   </section>
</template>

<style>
   * {
      box-sizing: border-box;
      margin: 0;
   }
   html {
      font-family: "Jost", sans-serif;
   }
   header {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      margin: 3rem auto;
      border-radius: 10px;
      padding: 1rem;
      background-color: #58004d;
      color: white;
      text-align: center;
      width: 90%;
      max-width: 40rem;
   }
   #app {
      & ul {
         margin: 0;
         padding: 0;
         list-style: none;
      }

      & li {
         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
         margin: 1rem auto;
         border-radius: 10px;
         padding: 1rem;
         text-align: center;
         width: 90%;
         max-width: 40rem;
      }

      & h2 {
         font-size: 2rem;
         border-bottom: 4px solid #ccc;
         color: #58004d;
         margin: 0 0 1rem 0;
      }

      & button {
         font: inherit;
         cursor: pointer;
         border: 1px solid #ff0077;
         background-color: #ff0077;
         color: white;
         padding: 0.05rem 1rem;
         box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);

         &:hover,
         &:active {
            background-color: #ec3169;
            border-color: #ec3169;
            box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
         }
      }
   }
</style>
