import "./globals.css"

import { createRouter, createWebHistory } from "vue-router"
import { createApp } from "vue"

import AllUsers from "@/pages/AllUsers.vue"
import CourseGoals from "@/pages/CourseGoals.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: AllUsers },
        { path: "/goals", component: CourseGoals },
    ],
})

import App from "./App.vue"

const app = createApp(App)

app.use(router)

router.isReady().then(function () {
    app.mount("#app")
})
