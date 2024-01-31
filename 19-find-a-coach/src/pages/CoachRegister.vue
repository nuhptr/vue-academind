<script>
   import BaseCard from "@/components/BaseCard.vue"
   import CoachForm from "@/components/CoachForm.vue"

   export default {
      components: { CoachForm, BaseCard },
      methods: {
         saveData(data) {
            console.log(data)
            this.$store.dispatch("coaches/registerCoach", data)
            this.$router.replace("/coaches")
         },
      },
   }
</script>

<template>
   <section>
      <BaseCard>
         <h2>Register as a coach now!</h2>
         <CoachForm @save-data="saveData" />
      </BaseCard>
   </section>
</template>
