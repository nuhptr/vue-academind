<script setup>
import { onMounted } from "vue"

onMounted(() => {
    // console.log($slots.header)
})
</script>

<style>
/* Style goes here */
</style>

<template>
    <div class="max-w-[30rem] p-4 my-[2rem] mx-auto rounded-xl shadow-md">
        <!-- Named slot in header -->
        <header v-if="$slots.header" class="flex items-center justify-between">
            <slot name="header"></slot>
        </header>

        <!-- For #default slot marked -->
        <slot></slot>
    </div>
</template>
