export default [{
    path: "tutorials",
    name: "Tutorial",
    redirect: { name: "TutorialList" },
    meta: {
        label: "Tutorial",
        icon: "fas fa-projects"
    },
    component: {
        template: "<router-view></router-view>"
    },
    children: [{
        path: "",
        name: "TutorialList",
        meta: {
            label: "List Tutorial",
        },
        component: () => import("../pages/Tutorial/Index.vue"),
    }, {
        path: "create",
        name: "TutorialCreate",
        meta: {
            label: "Add Tutorial",
        },
        component: () => import("../pages/Tutorial/Action.vue"),
    }, {
        path: ":id/edit",
        name: "TutorialEdit",
        meta: {
            label: "Edit Tutorial",
        },
        component: () => import("../pages/Tutorial/Action.vue"),
    }, {
        path: ":id",
        name: "TutorialShow",
        meta: {
            label: "Tutorial Detail",
        },
        component: () => import("../pages/Tutorial/Show.vue"),
    }]
}]