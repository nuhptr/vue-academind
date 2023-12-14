<script>
   export default {
      props: ["data"],
      data() {
         return {}
      },
   }
</script>

<template>
   <li>
      <div>
         <header>
            <h3>{{ data.title }}</h3>
            <button>Delete</button>
         </header>
      </div>
      <p>{{ data.description }}</p>
      <nav>
         <a :href="data.link" target="_blank" noopener noreferrer>View Resource</a>
      </nav>
   </li>
</template>

<style></style>
