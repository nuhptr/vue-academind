import { createRouter, createWebHistory } from "vue-router"

import TeamsList from "@/components/teams/TeamsList.vue"
import UserList from "@/components/users/UserList.vue"
import TeamMembers from "@/components/teams/TeamMembers.vue"
import NotFound from "@/components/nav/NotFound.vue"
import TeamsFooter from "@/components/teams/TeamsFooter.vue"
import UserFooter from "@/components/users/UserFooter.vue"

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      // redirecting to a route
      // alias can be used to redirect to the same component
      { path: "/", redirect: "/teams" },
      {
         //* our-domain.com/teams => TeamsList
         name: "teams",
         path: "/teams",
         component: { default: TeamsList, footer: TeamsFooter },
         children: [
            //* Nested routes => our-domain.com/teams/t1
            // passing data and props is the way to pass data to a component
            { name: "team-members", path: ":teamId", component: TeamMembers, props: true },
         ],
      },
      {
         path: "/users",
         name: "users",
         component: { default: UserList, footer: UserFooter },
      },
      // catch all route (404)
      { path: "/:notFound(.*)", component: NotFound },
   ],
   linkActiveClass: "active",
   // scroll behavior is used to scroll to the top of the page when we navigate to a new page
   scrollBehavior(to, from, savedPosition) {
      console.log(to, from, savedPosition)
      if (savedPosition) {
         return savedPosition
      }
      return { left: 0, top: 0 }
   },
})

export default router
