<script setup>
import { inject } from "vue"

const loadedProducts = inject("products")
</script>

<style scoped>
section {
    @apply mx-auto my-[3rem] max-w-[40rem] rounded-[12px] shadow-md p-4;
}

ul {
    @apply list-none p-0 m-0;
}

li {
    @apply my-4 border border-[#ccc] p-4;
}

h3,
h4 {
    @apply my-2;
}
</style>

<template>
    <section>
        <h2>All products</h2>
        <ul>
            <li v-for="product in loadedProducts" :key="product.id">
                <h3>{{ product.title }}</h3>
                <h4>${{ product.price }}</h4>
                <p>{{ product.description }}</p>
                <router-link :to="'/products/' + product.id">View Details</router-link>
            </li>
        </ul>
    </section>
</template>
