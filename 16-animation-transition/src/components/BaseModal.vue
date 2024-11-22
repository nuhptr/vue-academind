<script setup>
const props = defineProps(["open"])
const emit = defineEmits(["close"])
</script>

<style scoped>
.modal-enter-active {
    animation: modal 0.3s ease-out;
}

.modal-leave-active {
    animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
    from {
        @apply opacity-0 translate-y-[-50px] scale-90;
    }

    to {
        @apply opacity-100 translate-y-0 scale-100;
    }
}
</style>

<template>
    <div
        v-if="props.open"
        class="fixed top-0 left-0 z-10 w-full h-screen bg-black/75"
        @click="emit('close')"
    ></div>

    <transition name="modal">
        <dialog
            class="fixed top-[30dvh] w-[30rem] left-[calc(50% - 15rem)] shadow-md rounded-md p-4 bg-white z-[100] border-none"
            open
            v-if="props.open"
        >
            <slot></slot>
        </dialog>
    </transition>
</template>
