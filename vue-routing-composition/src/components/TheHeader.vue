<style scoped>
header {
    @apply w-full h-[5rem] bg-[#570080] shadow-md;
}

nav {
    @apply h-full;
}

ul {
    @apply list-none p-0 m-0 h-full flex justify-center items-center;
}

li {
    @apply mx-4;
}

a {
    @apply text-white font-[1.25rem] hover:text-[#fca55e] active:text-[#fca55e];
}
</style>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link active-class="text-[#fca55e]" to="/products">
                        All Products
                    </router-link>
                </li>
                <li>
                    <router-link active-class="text-[#fca55e]" to="/products/add">
                        Add Product
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
