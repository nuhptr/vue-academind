<!-- <script>
   export default {
      emits: ["setPage"],
      methods: {
         setActivePage(page) {
            this.$emit("setPage", page)
         },
      },
   }
</script> -->

<template>
   <header>
      <nav>
         <ul>
            <li>
               <!-- <button @click="setActivePage('teamsList')">Teams</button> -->
               <!-- RouterLink same as a tag -->
               <RouterLink to="/teams">Teams</RouterLink>
            </li>
            <li>
               <!-- <button @click="setActivePage('usersList')">Users</button> -->
               <!-- RouterLink same as a tag -->
               <RouterLink to="/users">Users</RouterLink>
            </li>
         </ul>
      </nav>
   </header>
</template>

<style scoped>
   header {
      width: 100%;
      height: 5rem;
      background-color: #11005c;
   }

   nav {
      height: 100%;
   }

   ul {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      list-style: none;
      margin: 0 auto;
      padding: 0;
   }

   li {
      margin: 0 2rem;
   }

   a {
      text-decoration: none;
      font: inherit;
      background: transparent;
      border: 1px solid transparent;
      cursor: pointer;
      color: white;
      padding: 0.5rem 1.5rem;
      display: inline-block;

      &:hover,
      &:active,
      &.active {
         color: #f1a80a;
         border-color: #f1a80a;
         background-color: #1a037e;
      }
   }
</style>
