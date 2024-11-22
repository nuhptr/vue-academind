<script setup>
import { useStore } from "vuex"
import { inject } from "vue"

import BaseBadge from "../ui/BaseBadge.vue"

const store = useStore()
// connst addProductToCart = inject("addProductToCart")

const props = defineProps(["id", "image", "title", "price", "description"])

const addToCart = () => {
    store.dispatch("cart/addToCart", {
        id: props.id,
        image: props.image,
        title: props.title,
        price: props.price,
    })
}
</script>

<style scoped>
/* Style goes here */
</style>

<template>
    <li class="p-4 mx-auto my-6 tracking-normal rounded-lg shadow-md">
        <div class="flex">
            <div class="mr-4">
                <img class="w-[10rem] h-[10rem] object-cover" :src="image" :alt="title" />
            </div>

            <div class="flex flex-col w-full gap-2">
                <div class="flex items-center justify-between w-full mb-3">
                    <h3 class="w-full font-bold text-violet-600">{{ title }}</h3>
                    <base-badge mode="highlight" :no-margin-left="true">
                        <h4 class="m-0">${{ price }}</h4>
                    </base-badge>
                </div>
                <p class="line-clamp-2 text-zinc-600">{{ description }}</p>

                <button
                    class="px-6 py-2 mt-8 text-white cursor-pointer w-fit bg-violet-600 hover:bg-violet-700 active:bg-violet-700 rounded-3xl"
                    @click="addToCart"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </li>
</template>
