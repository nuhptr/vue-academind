<script>
import FriendContact from "./components/FriendContact.vue"
import NewFriend from "./components/NewFriend.vue"

export default {
   components: { FriendContact, NewFriend },
   data() {
      return {
         friends: [
            {
               id: "manuel",
               name: "Manuel Lorenz",
               phone: "0123 45678 90",
               email: "manuel@localhost.com",
               isFavorite: true,
            },
            {
               id: "julie",
               name: "Julie Jonas",
               phone: "0987 654421 21",
               email: "julie@localhost.com",
               isFavorite: false,
            },
         ],
      }
   },
   methods: {
      toogleFavoriteStatus(friendId) {
         const identifiedFriend = this.friends.find((friend) => friend.id === friendId)
         identifiedFriend.isFavorite = !identifiedFriend.isFavorite
      },
      addContact(contactData) {
         const newContact = {
            id: new Date().toISOString(),
            name: contactData.name,
            phone: contactData.phone,
            email: contactData.email,
            isFavorite: false,
         }
         this.friends.push(newContact)
      },
      deleteContact(friendId) {
         this.friends = this.friends.filter((friend) => friend.id !== friendId)
      },
   },
}
</script>

<template>
   <section>
      <header>
         <h1>My Friends</h1>
      </header>
      <NewFriend @addContact="addContact" />
      <ul>
         <!--* Loop the data in components -->
         <FriendContact v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name"
            :phoneNumber="friend.phone" :emailAddress="friend.email" :isFavorite="friend.isFavorite"
            @toogleFavorite="toogleFavoriteStatus" @deleteFriend="deleteContact" />
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

   & li,
   & form {
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

   & input {
      font: inherit;
      padding: 0.15rem;
   }

   & label {
      font-weight: bold;
      margin-right: 1rem;
      width: 7rem;
      display: inline-block;
   }

   & form div {
      margin: 1rem 0;
   }
}
</style>
