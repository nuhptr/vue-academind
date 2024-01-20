<script>
import BadgeBase from "./badge/BadgeBase.vue"
import Card from "./Card.vue"

export default {
   components: { BadgeBase, Card },
   props: ["fullName", "infoText", "role"],
}
</script>

<template>
   <section>
      <Card>
         <!-- * #header same as v-slot:header -->
         <template #header>
            <h3>{{ fullName }}</h3>
            <BadgeBase :type="role" :caption="role.toUpperCase()" />
         </template>
         <template v-slot:default>
            <p>{{ infoText }}</p>
         </template>
      </Card>
   </section>
</template>
