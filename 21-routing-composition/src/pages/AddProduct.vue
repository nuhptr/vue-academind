<script setup>
import { ref, inject } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const addProduct = inject("addProduct")

const enteredTitle = ref("")
const enteredPrice = ref(null)
const enteredDescription = ref("")

const submitForm = () => {
    addProduct({
        title: enteredTitle.value,
        description: enteredDescription.value,
        price: enteredPrice.value,
    })

    router.push("/products")
}
</script>

<style scoped>
section {
    @apply mx-auto my-[3rem] max-w-[40rem] rounded-[12px] shadow-md p-4;
}

input,
label,
textarea {
    @apply w-full block;
}

label {
    @apply font-bold;
}

input,
textarea {
    @apply mb-2;
}

button {
    @apply bg-[#570080] border border-[#570080] text-white px-6 py-2 cursor-pointer hover:bg-[#220031] hover:border-[#220031];
}
</style>

<template>
    <section>
        <h2>Add a products</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" v-model="enteredTitle" />
            </div>
            <div>
                <label for="price">Price</label>
                <input type="number" id="price" v-model.number="enteredPrice" />
            </div>
            <div>
                <label for="description">Description</label>
                <textarea rows="5" id="description" v-model="enteredDescription"></textarea>
            </div>
            <button>Add Product</button>
        </form>
    </section>
</template>
