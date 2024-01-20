<script>
import BaseButton from "../ui/BaseButton.vue"
import BaseCard from "../ui/BaseCard.vue"

export default {
   components: { BaseCard, BaseButton },
   props: ["data"],
   inject: ["removeResource"],
}
</script>

<template>
   <li>
      <BaseCard>
         <header>
            <h3>{{ data.title }}</h3>
            <BaseButton mode="flat" @click="removeResource(data.id)">Delete</BaseButton>
         </header>
         <p>{{ data.description }}</p>
         <nav>
            <a :href="data.link" target="_blank" noopener noreferrer>View Resource</a>
         </nav>
      </BaseCard>
   </li>
</template>

<style scoped>
li {
   margin: auto;
   max-width: 40rem;
}

header {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

h3 {
   font-size: 1.25rem;
   margin: 0.5rem 0;
}

p {
   margin: 0.5rem 0;
}

a {
   text-decoration: none;
   color: #ce5c00;

   &:hover,
   &:active {
      color: #c89300;
   }
}</style>
