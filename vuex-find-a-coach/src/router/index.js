import { createRouter, createWebHistory } from "vue-router"

import NotFound from "@/pages/NotFound.vue"
import CoachDetail from "@/pages/CoachDetail.vue"
import CoachesList from "@/pages/CoachesList.vue"
import CoachRegister from "@/pages/CoachRegister.vue"
import ContactCoach from "@/pages/ContactCoach.vue"
import RequestReceive from "@/pages/RequestReceive.vue"

import store from "@/store"

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
            meta: { requiresAuth: true }, // navigation guard
        },
        {
            path: "/auth",
            component: () => import("@/pages/UserAuth.vue"), // Lazy loading
            meta: { requiresUnauth: true }, // navigation guard
        },
        {
            path: "/request",
            component: RequestReceive,
            meta: { requiresAuth: true }, // navigation guards
        },
        {
            path: "/:notFound(.*)",
            component: NotFound,
        },
    ],
})

// Navigation guards
router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next("/auth")
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next("/coaches")
    } else {
        next()
    }
})

export default router
