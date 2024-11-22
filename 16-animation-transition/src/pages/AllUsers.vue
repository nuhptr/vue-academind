<script setup>
import UserList from "@/components/UserList.vue"
</script>

<style scoped>
.container {
    @apply max-w-[40rem] mx-auto my-8 flex justify-center items-center flex-col p-8 border-[2px] border-zinc-200 rounded-lg;
}

.button {
    font: inherit;
    @apply px-4 py-2 rounded-3xl bg-[#001381] text-white cursor-pointer hover:bg-[#0b22a8] transition-colors duration-300 ease-in-out active:bg-[#0b22a8];
}
</style>

<template>
    <div>
        <div class="container">
            <h2 class="mb-4">All Users</h2>
            <RouterLink class="button" to="/goals">Course Goals</RouterLink>
        </div>

        <div class="container">
            <UserList />
        </div>
    </div>
</template>
