<script setup>
import { ref } from "vue"

import FriendContact from "./components/FriendContact.vue"
import NewFriend from "./components/NewFriend.vue"

const friends = ref([
    {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@gmail.com",
        isFavorite: true,
    },
    {
        id: "julie",
        name: "Julie Jonas",
        phone: "0987 654421 21",
        email: "julie@gmail.com",
        isFavorite: false,
    },
])

const toogleFavoriteStatus = (friendId) => {
    const identifiedFriend = friends.value.find((friend) => friend.id === friendId)
    identifiedFriend.isFavorite = !identifiedFriend.isFavorite
}

const addContact = (contactData) => {
    const newContact = {
        id: new Date().toISOString(),
        name: contactData.name,
        phone: contactData.phone,
        email: contactData.email,
        isFavorite: false,
    }

    friends.value.push(newContact)
}

const deleteContact = (friendId) => {
    friends.value = friends.value.filter((friend) => friend.id !== friendId)
}
</script>

<style>
/* style goes here */
</style>

<template>
    <section class="container mx-auto my-10 max-md:px-4">
        <header
            class="w-full md:max-w-[40rem] my-[2rem] lg:my-[3rem] mx-auto p-4 rounded-md text-white text-center bg-indigo-600 shadow-md"
        >
            <h1 class="text-xl">My Friends</h1>
        </header>

        <div class="flex flex-wrap mx-auto max-xl:gap-y-8">
            <NewFriend @addContact="addContact" class="h-full" />

            <ul class="flex-1 list-none h-fit">
                <!-- Loop the data in components -->
                <FriendContact
                    v-for="friend in friends"
                    :key="friend.id"
                    :id="friend.id"
                    :name="friend.name"
                    :phoneNumber="friend.phone"
                    :emailAddress="friend.email"
                    :isFavorite="friend.isFavorite"
                    @toogleFavorite="toogleFavoriteStatus"
                    @deleteFriend="deleteContact"
                />
            </ul>
        </div>
    </section>
</template>
