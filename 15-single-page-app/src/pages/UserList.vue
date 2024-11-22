<script setup>
import { onBeforeRouteLeave, useRouter } from "vue-router"
import { inject, onUnmounted, ref } from "vue"

import UserItem from "../components/users/UserItem.vue"

const changesSaved = ref(false)
const users = inject("users")

const router = useRouter()

const confirmInput = () => {
    // do something
    router.push("/teams")
}

const saveChanges = () => {
    changesSaved.value = true
    alert("Changes saved!, thanks for saving")
}

onUnmounted(() => {
    console.log("unmounted UsersList")
})

// beforeRouteEnter((to, from, next) => {
//    console.log("beforeRouteUpdate UsersList")
//    console.log(to, from)

//    next()
// })

// navigation guards
onBeforeRouteLeave((to, from, next) => {
    console.log("beforeRouteLeave UsersList")
    console.log(to, from)

    if (changesSaved.value) next()
    else {
        const userWantToExit = confirm("Are you sure? You got unsaved changes!")
        next(userWantToExit)
    }
})
</script>

<style>
/* styles goes here */
</style>

<template>
    <div class="flex items-center justify-center gap-4 mt-10">
        <button
            class="px-3 py-2 border border-green-500 rounded-md hover:bg-green-500 hover:text-white"
            @click="confirmInput"
        >
            Confirm
        </button>
        <button
            class="px-3 py-2 border rounded-md border-amber-500 hover:bg-amber-500 hover:text-white"
            @click="saveChanges"
        >
            Save Changes
        </button>
    </div>
    <ul class="list-none mx-auto my-8 max-w-[20rem] p-0">
        <UserItem v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role" />
    </ul>
</template>
