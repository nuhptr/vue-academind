<script>
   import BaseCard from "@/components/BaseCard.vue"
   import CoachForm from "@/components/CoachForm.vue"

   export default {
      components: { CoachForm, BaseCard },
   }
</script>

<template>
   <section>
      <BaseCard>
         <h2>Register as a coach now!</h2>
         <CoachForm />
      </BaseCard>
   </section>
</template>
