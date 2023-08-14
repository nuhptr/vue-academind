<template>
   <section>
      <BaseCard>
         <!-- named slot can use v-slot / # -->
         <template #header>
            <h3>{{ fullName }}</h3>
            <BaseBadge :type="role" :caption="role.toUpperCase()" />
         </template>
         <template #default>
            <p>{{ infoText }}</p>
         </template>
      </BaseCard>
   </section>
</template>

<script>
import BaseBadge from "../UI/BaseBadge.vue";
import BaseCard from "../UI/BaseCard.vue";

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
