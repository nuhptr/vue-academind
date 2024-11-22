<script setup>
import { ref } from "vue"

const users = ref(["Max", "Anna", "Chris", "Manu", "Michael", "Angela"])
const userNameInput = ref("")

const addUser = () => {
    const enteredUsername = userNameInput.value
    if (enteredUsername === "") {
        return alert("Please enter a username")
    }

    users.value.unshift(enteredUsername)
    userNameInput.value = ""
}

const removeUser = (user) => {
    users.value = users.value.filter((userIndex) => userIndex !== user)
}
</script>

<style scoped>
/* Special class for transition */
.user-list-enter-from {
    @apply opacity-0 translate-x-[-30px];
}

.user-list-enter-active {
    /* 1000ms = 1s */
    @apply transition-all duration-1000 ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
    @apply opacity-100 translate-x-0;
}

.user-list-leave-active {
    @apply transition-all duration-1000 ease-in absolute;
}

.user-list-leave-to {
    @apply opacity-0 translate-x-[30px];
}

/* Move css when item remove or added */
.user-list-move {
    @apply transition-transform duration-[800ms] ease-linear;
}

.button {
    font: inherit;
    @apply px-4 py-2 rounded-3xl bg-[#001381] text-white cursor-pointer hover:bg-[#0b22a8] outline-none transition-colors duration-300 ease-in-out active:bg-[#0b22a8];
}
</style>

<template>
    <!-- Using transition group -->
    <TransitionGroup tag="ul" name="user-list" class="p-0 mx-0 my-4 list-none">
        <li
            v-for="user in users"
            :key="user"
            @click="removeUser(user)"
            class="p-4 text-center border border-zinc-200"
        >
            {{ user }}
        </li>
    </TransitionGroup>

    <div>
        <input
            type="text"
            v-model="userNameInput"
            class="px-2 py-2 mr-4 transition-colors duration-300 ease-in-out border rounded-md border-zinc-300 focus:outline-none focus:bg-zinc-100"
        />
        <button @click="addUser" class="button">Add User</button>
    </div>
</template>
