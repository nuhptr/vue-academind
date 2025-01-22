<script setup>
import BadgeBase from "./BadgeBase.vue"
import Card from "../ui/Card.vue"
</script>

<style>
/* Style goes here */
</style>

<template>
    <section>
        <Card>
            <!--  #default same as v-slot="default" -->
            <template #default>
                <ul class="flex p-0 m-0 list-none">
                    <li class="mr-4"><BadgeBase type="admin" caption="ADMIN" /></li>
                    <li class="mr-4"><BadgeBase type="author" caption="AUTHOR" /></li>
                </ul>
            </template>
        </Card>
    </section>
</template>
