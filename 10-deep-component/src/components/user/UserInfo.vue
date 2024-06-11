<script setup>
import BadgeBase from "../badge/BadgeBase.vue"
import Card from "../ui/Card.vue"

const props = defineProps(["fullName", "infoText", "role"])
</script>

<style>
/* Style goes here */
</style>

<template>
   <section>
      <Card>
         <!--  #header same as v-slot:header -->
         <template #header>
            <h3>{{ props.fullName }}</h3>
            <BadgeBase :type="props.role" :caption="props.role.toUpperCase()" />
         </template>

         <template v-slot:default>
            <p>{{ props.infoText }}</p>
         </template>
      </Card>
   </section>
</template>
