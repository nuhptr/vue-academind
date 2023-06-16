<template>
   <section>
      <BaseCard>
         <!-- named slot -->
         <template v-slot:header>
            <h3>{{ fullName }}</h3>
            <BaseBadge :type="role" :caption="role.toUpperCase()" />
         </template>
         <template v-slot:default>
            <p>{{ infoText }}</p>
         </template>
      </BaseCard>
   </section>
</template>

<script>
import BaseBadge from "./BaseBadge.vue";
import BaseCard from "./BaseCard.vue";

export default {
   props: ["fullName", "infoText", "role"],
   components: { BaseBadge, BaseCard },
};
</script>

<style scoped>
section header {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
</style>
