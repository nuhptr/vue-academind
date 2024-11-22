<script setup></script>

<style scoped>
.container {
    @apply max-w-[40rem] mx-auto my-8 flex justify-center items-center flex-col p-8 border-[2px] border-zinc-200 rounded-lg;
}

.button {
    font: inherit;
    @apply px-4 py-2 rounded-3xl bg-[#810032] text-white cursor-pointer hover:bg-[#a80b48] transition-colors duration-300 ease-in-out active:bg-[#a80b48];
}
</style>

<template>
    <div class="container">
        <h2 class="mb-4">Course Goals</h2>
        <RouterLink class="button" to="/">All Users</RouterLink>
    </div>
</template>
