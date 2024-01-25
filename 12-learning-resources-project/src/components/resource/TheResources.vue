<script>
   import BaseButton from "../ui/BaseButton.vue"
   import BaseCard from "../ui/BaseCard.vue"
   import StoredResource from "./StoredResource.vue"
   import AddResource from "./AddResource.vue"

   export default {
      components: { BaseCard, BaseButton, StoredResource, AddResource },
      data() {
         return {
            selectedTab: "StoredResource",
            storedResources: [
               {
                  id: 1,
                  title: "Learn Vue",
                  description: "Learn Vue in 30 minutes",
                  link: "https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance",
               },
               {
                  id: 2,
                  title: "Learn CSS",
                  description: "Learn CSS in 30 minutes",
                  link: "https://www.udemy.com/course/the-complete-css-mastery-course/",
               },
               {
                  id: 3,
                  title: "Learn HTML",
                  description: "Learn HTML in 30 minutes",
                  link: "https://www.udemy.com/course/html-and-css-basics-to-advance-with-real-website-designs/",
               },
            ],
         }
      },
      provide() {
         return {
            storedResources: this.storedResources,
            selectedTab: this.selectedTab,
            // function
            addResource: this.addResource,
            removeResource: this.removeResource,
         }
      },
      methods: {
         setSelectTab(tab) {
            this.selectedTab = tab
         },
         addResource(title, description, url) {
            const newResource = {
               id: new Date().toISOString(),
               title: title,
               description: description,
               link: url,
            }
            this.storedResources.unshift(newResource)
            this.selectedTab = "StoredResource"
         },
         removeResource(id) {
            const resIndex = this.storedResources.findIndex((res) => res.id === id)
            this.storedResources.splice(resIndex, 1)
         },
      },
      computed: {
         storedResButtonMode() {
            return this.selectedTab === "StoredResource" ? null : "flat"
         },
         addResButtonMode() {
            return this.selectedTab === "AddResource" ? null : "flat"
         },
      },
   }
</script>

<template>
   <BaseCard>
      <BaseButton style="margin-right: 16px" @click="setSelectTab('StoredResource')" :mode="storedResButtonMode">
         Stored Resources
      </BaseButton>
      <BaseButton @click="setSelectTab('AddResource')" :mode="addResButtonMode">Add Resources</BaseButton>
   </BaseCard>
   <KeepAlive>
      <component :is="selectedTab" />
   </KeepAlive>
</template>
