<template>
   <div>
      <TheHeader />
      <BadgeList />
      <UserInfo
         :full-name="activeUser.name"
         :info-text="activeUser.description"
         :role="activeUser.role" />
      <!-- <CourseGoals #default="slotProps">
         <h2>{{ slotProps.item }}</h2>
         <p>{{ slotProps["another-prop"] }}</p>
      </CourseGoals> -->

      <!-- Dynamic Comoponent -->
      <button @click="setSelectedComponents('ActiveGoals')">Active Goals</button>
      <button @click="setSelectedComponents('ManageGoals')">Manage Goals</button>
      <!-- state be saved -->
      <keep-alive>
         <component :is="selectedComponent"></component>
      </keep-alive>
   </div>
</template>

<script>
   import BadgeList from './components/slots/BadgeList.vue';
   import TheHeader from './components/TheHeader.vue';
   import UserInfo from './components/slots/UserInfo.vue';
   import CourseGoals from './components/dynamic-component/CourseGoals.vue';
   import ActiveGoals from './components/dynamic-component/ActiveGoals.vue';
   import ManageGoals from './components/dynamic-component/ManageGoals.vue';

   export default {
      data() {
         return {
            selectedComponent: 'ActiveGoals', // 'manage-goals
            activeUser: {
               name: 'Maximilian Schwarzmüller',
               description: 'Site owner and admin',
               role: 'admin',
            },
         };
      },
      methods: {
         setSelectedComponents(cmp) {
            this.selectedComponent = cmp;
         },
      },
      components: {
         TheHeader,
         BadgeList,
         UserInfo,
         CourseGoals,
         ActiveGoals,
         ManageGoals,
      },
   };
</script>

<style>
   html {
      font-family: sans-serif;
   }

   body {
      margin: 0;
   }
</style>
