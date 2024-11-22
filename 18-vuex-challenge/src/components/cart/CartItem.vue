<script setup>
import { computed, inject } from "vue"
import { useStore } from "vuex"

const store = useStore()
// const cart = inject("cart")

const props = defineProps(["prodId", "title", "image", "price", "qty"])

const itemTotal = computed(() => (props.price * props.qty).toFixed(2))

const remove = () => {
    store.dispatch("cart/removeFromCart", { productId: props.prodId })
}
</script>

<style scoped>
/* Style goes here */
</style>

<template>
    <li class="p-6 rounded-md shadow-md col-span-full lg:col-span-4">
        <div class="flex items-center mb-4 gap-x-6">
            <img :src="image" :alt="title" class="w-[5rem] h-[5rem] rounded-full object-cover" />
            <div class="flex flex-col items-start gap-y-2">
                <h3 class="text-2xl font-semibold">{{ title }}</h3>
                <p>
                    Price per Item:
                    <strong>${{ price }}</strong>
                </p>
            </div>
        </div>

        <div>
            <div class="flex justify-between mt-6">
                <div>
                    Quantity:
                    <strong>{{ qty }}</strong>
                </div>
                <div>Total: ${{ itemTotal }}</div>
            </div>

            <button
                class="w-full px-6 py-2 mt-6 text-white rounded-lg cursor-pointer bg-rose-500 hover:bg-rose-600"
                @click="remove"
            >
                Remove
            </button>
        </div>
    </li>
</template>
