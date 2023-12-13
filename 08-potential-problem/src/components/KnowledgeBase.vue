<script>
   import KnowledgeBaseGrid from "./KnowledgeBaseGrid.vue"

   export default {
      components: { KnowledgeGrid, KnowledgeBaseGrid },
      data() {
         return {}
      },
   }
</script>

<template>
   <section>
      <h2>Select a Topic</h2>
      <KnowledgeBaseGrid />
   </section>
</template>

<style></style>
