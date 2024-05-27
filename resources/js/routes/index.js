import { createRouter, createWebHistory } from "vue-router"

const AppLayout = () => import("../pages/Layout/App.vue")
const ErrorLayout = () => import("../pages/Layout/Error.vue")

import dashboard from "./dashboard"
import tutorial from "./tutorial"
import errorRoutes from "./error"

const baseURL = "/app"

const router = createRouter({
    history: createWebHistory(baseURL),
    routes: [{
        path: "/",
        name: "App",
        component: AppLayout,
        redirect: { name: "Dashboard" },
        children: [
            ...dashboard,
            ...tutorial,
        ]
    }, {
        path: "/",
        name: "Error",
        component: ErrorLayout,
        children: [
            ...errorRoutes,
        ]
    }, {
        path: "/:pathMatch(.*)*",
        meta: {
            isNotNav: true,
        },
        beforeEnter: (to, from, next) => {
            next({ name: "Error404", replace: true, query: { "ref": to.fullPath, "from": from.fullPath } })
        }
    }]
})

export default router
