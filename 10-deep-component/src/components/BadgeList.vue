<script>
import BadgeBase from "./BadgeBase.vue"
import Card from "./Card.vue"

export default {
   components: { BadgeBase, Card },
}
</script>

<template>
   <section>
      <Card>
         <!-- <template v-slot:header>
            <h2>Available Badges</h2>
         </template> -->
         <!-- * #header same as v-slot="header" -->
         <template #default>
            <ul>
               <li>
                  <BadgeBase type="admin" caption="ADMIN" />
               </li>
               <li>
                  <BadgeBase type="author" caption="AUTHOR" />
               </li>
            </ul>
         </template>
      </Card>
   </section>
</template>

<style scoped>
section h2 {
   margin: 0.5rem 0;
   color: #3a3a3a;
}

ul {
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: row;
}

li {
   margin-right: 1rem;
}
</style>
