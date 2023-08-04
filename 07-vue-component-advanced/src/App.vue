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
      <!-- <ActiveGoals v-if="selectedComponent === 'ActiveGoals'"></ActiveGoals> -->
      <!-- <ManageGoals v-if="selectedComponent === 'ManageGoals'"></ManageGoals> -->
      <component :is="selectedComponent"></component>
   </div>
</template>

<script>
   import BadgeList from './components/BadgeList.vue';
   import TheHeader from './components/TheHeader.vue';
   import UserInfo from './components/UserInfo.vue';
   import CourseGoals from './components/CourseGoals.vue';
   import ActiveGoals from './components/ActiveGoals.vue';
   import ManageGoals from './components/ManageGoals.vue';

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
