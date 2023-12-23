import { createRouter, createWebHistory } from "vue-router"

import TeamsList from "@/components/teams/TeamsList.vue"
import UserList from "@/components/users/UserList.vue"
import TeamMembers from "@/components/teams/TeamMembers.vue"

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      { path: "/teams", name: "teams", component: TeamsList }, //* our-domain.com/teams => TeamsList
      { path: "/users", name: "users", component: UserList },
      // passing data
      { path: "/teams/:teamId", name: "team-members", component: TeamMembers },
   ],
   linkActiveClass: "active",
})

export default router
