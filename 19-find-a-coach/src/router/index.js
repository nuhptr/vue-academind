import { createRouter, createWebHistory } from "vue-router"

import NotFound from "@/pages/NotFound.vue"
import CoachDetail from "@/pages/CoachDetail.vue"
import CoachesList from "@/pages/CoachesList.vue"
import CoachRegister from "@/pages/CoachRegister.vue"
import ContactCoach from "@/pages/ContactCoach.vue"
import RequestReceive from "@/pages/RequestReceive.vue"

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         redirect: "/coaches",
      },
      {
         path: "/coaches",
         component: CoachesList,
      },
      {
         path: "/coaches/:id",
         component: CoachDetail,
         //? allow to pass the id as a prop to the component
         props: true,
         children: [
            { path: "contact", component: ContactCoach }, // /coaches/c1/contact
         ],
      },
      {
         path: "/register",
         component: CoachRegister,
      },
      {
         path: "/request",
         component: RequestReceive,
      },
      {
         path: "/:notFound(.*)",
         component: NotFound,
      },
   ],
})

export default router
