<script setup>
import { ref } from "vue"
import Card from "../ui/Card.vue"

const goals = ref(["Finish the course", "Learn Vue!"])
</script>

<style>
/* Style goes here */
</style>

<template>
    <Card>
        <template #default>
            <ul class="w-full p-0 m-0 list-none">
                <li v-for="goal in goals" :key="goal">
                    <slot :item="goal" anotherProp="..." />
                </li>
            </ul>
        </template>
    </Card>
</template>
