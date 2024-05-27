<template>
    <ul class="text-sm">
        <li class="text-white hover:text-dark-secondary hover:bg-gray-600 dark:hover:bg-light"
            v-for="navigation in navigations" :key="navigation.name" :class="{
                'bg-gray-600 dark:bg-light': isActive(navigation)
            }">
            <div class="cursor-pointer" @click="clickNavigation(navigation)">
                <div class="pl-5 pr-2 py-4 flex items-center" :class="{
                'justify-between': hasChild(navigation)
            }">
                    <div>
                        <span>
                            <i class="mr-3 shrink-0 w-6" :class="navigation.icon"></i>
                        </span>
                        <span>{{ navigation.label }}</span>
                    </div>
                    <span v-if="hasChild(navigation)">
                        <i class="mr-3 shrink-0 w-6 fas fa-chevron-right" v-if="navigation.active"></i>
                        <i class="mr-3 shrink-0 w-6 fas fa-chevron-down" v-else></i>
                    </span>
                </div>
            </div>
            <div v-if="hasChild(navigation)">
                <ul>
                    <li class="text-secondary hover:text-darken-secondary hover:bg-darken-primary dark:hover:bg-black cursor-pointer"
                        v-for="child in navigation.children" :key="child.name">
                        <div class="pl-10 pr-2 py-2 flex items-center">
                            <span>
                                <i class="mr-3 shrink-0 w-4" :class="child.icon"></i>
                            </span>
                            <span>{{ child.label }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "AppNavigation"
}
</script>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const navigations = [
    {
        icon: "fas fa-home",
        label: "Tutorial",
        name: "Tutorial",
        path: "Tutorial"
    },
    {
        icon: "fas fa-table",
        label: "Menu 1",
        name: "Menu1",
        path: "Dashboard"
    },
    {
        icon: "fab fa-wpforms",
        label: "Menu 2",
        name: "Menu2",
        path: "Dashboard"
    },
    {
        icon: "far fa-square",
        label: "Menu 3",
        name: "Menu3",
        path: "Dashboard"
    },
    {
        icon: "fas fa-sign-in-alt",
        label: "Menu 4",
        name: "Menu4",
        path: "Dashboard"
    },
    {
        icon: "fas fa-user-plus",
        label: "Menu 5",
        name: "Menu5",
        path: "Dashboard"
    },
    {
        icon: "fas fa-key",
        label: "Menu 6",
        name: "Menu6",
        path: "Dashboard"
    },
    {
        icon: "fas fa-boxes",
        label: "Menu 7",
        name: "Menu7",
        active: false,
        children: [
            {
                icon: "fas fa-chevron-right",
                label: "Sub Menu 1",
                name: "SubMenu1",
            },
            {
                icon: "fas fa-chevron-right",
                label: "Sub Menu 2",
                name: "SubMenu2",
            }
        ]
    }
]

const clickNavigation = (navigation) => {
    if (hasChild(navigation)) {
        navigation.active = true
        return
    }

    if (hasPath(navigation)) {
        router.push({ name: navigation.path })
    }

    return
}

const hasPath = (navigation) => {
    return navigation.hasOwnProperty("path") ? true : false
}

const hasChild = (navigation) => {
    return navigation.hasOwnProperty("children") && navigation.children.length > 0 ? true : false
}

const isActive = (navigation) => {
    if (navigation.hasOwnProperty("active") && navigation.active) {
        return true
    }

    return false
}
</script>