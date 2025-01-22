<script setup>
import BaseButton from "./BaseButton.vue"

defineProps({ title: { type: String, required: true } })

const emit = defineEmits(["close"])

const closeDialog = () => {
    emit("close")
}
</script>

<style scoped>
/* Style goes here */
</style>

<template>
    <Teleport to="body">
        <div class="fixed top-0 left-0 z-10 w-full h-dvh bg-black/75" @click="closeDialog"></div>
        <dialog
            open
            class="p-0 m-0 overflow-hidden border-none fixed top-[20dvh] left-[20%] w-[80%] z-[100] rounded-md shadow-md md:left-[calc(50%-20rem)] md:w-[40rem]"
        >
            <header class="bg-[#3a0061] text-white w-full p-4">
                <slot name="header">
                    <h2 class="m-0">{{ title }}</h2>
                </slot>
            </header>

            <section class="p-4">
                <!-- Default slot -->
                <slot></slot>
            </section>

            <menu class="flex justify-end p-4 m-0">
                <slot name="action">
                    <BaseButton @click="$emit('close')">Close</BaseButton>
                </slot>
            </menu>
        </dialog>
    </Teleport>
</template>
