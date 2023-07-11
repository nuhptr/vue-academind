<template>
   <ul>
      <li>
         <h3>{{ topicName }}</h3>
         <p>{{ description }}</p>
         <button @click="selectTopic(id)">Learn More</button>
      </li>
   </ul>
</template>

<script>
export default {
   inject: ["selectTopic"],
   props: ["id", "topicName", "description"],
};
</script>
