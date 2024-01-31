<script>
   import BaseCard from "@/components/BaseCard.vue"
   import RequestItem from "@/components/RequestItem.vue"

   export default {
      components: { BaseCard, RequestItem },
      computed: {
         receiveRequests() {
            return this.$store.getters["requests/requests"]
         },
         hasRequests() {
            return this.$store.getters["requests/hasRequests"]
         },
      },
   }
</script>

<template>
   <section>
      <BaseCard>
         <header>
            <h2>Requests Received</h2>
         </header>
         <ul v-if="hasRequests">
            <RequestItem
               v-for="req in receiveRequests"
               :key="req.id"
               :email="req.userEmail"
               :message="req.message"></RequestItem>
         </ul>
         <h3 v-else>You haven't received ay requests yet!</h3>
      </BaseCard>
   </section>
</template>

<style scoped>
   header {
      text-align: center;
   }

   ul {
      list-style: none;
      margin: 2rem auto;
      padding: 0;
      max-width: 30rem;
   }

   h3 {
      text-align: center;
   }
</style>
