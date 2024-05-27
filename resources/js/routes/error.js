export default [{
    path: "error",
    name: "Error",
    meta: {
        title: "Something went wrong!",
    },
    component: () => import("../pages/Error/Index.vue"),
}, {
    path: "404",
    name: "Error404",
    meta: {
        title: "Page not found!",
    },
    component: () => import("../pages/Error/404.vue"),
}]
