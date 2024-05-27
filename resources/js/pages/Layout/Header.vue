<template>
    <div
        class="relative shrink-0 flex justify-between h-16 bg-gray-200 dark:bg-dark-header dark:border-b dark:border-gray-700 shadow-lg">
        <div class="flex items-center space-x-4">
            <div class="flex items-center">
                <img src="/images/icon.png" class="sm:hidden h-10 ml-4 mr-2" />
                <img src="/images/icon.png" class="hidden sm:block h-10 ml-4 mr-2" v-if="sidebar == 'mobile'" />
            </div>
            <i class="fas fa-bars lg:hidden text-gray-500 dark:text-gray-300 cursor-pointer" v-if="sidebar == 'mobile'"
                @click="setSidebar('full')"></i>
            <i class="fas fa-bars lg:hidden text-gray-500 dark:text-gray-300 cursor-pointer" v-if="sidebar == 'full'"
                @click="setSidebar('mobile')"></i>
        </div>
        <div class="flex justify-between items-center space-x-4 px-4">
            <i class="fas fa-sun text-white cursor-pointer" v-if="display == 'dark'" @click="setDisplay('light')"></i>
            <i class="fas fa-moon text-black cursor-pointer" v-if="display == 'light'" @click="setDisplay('dark')"></i>
            <div class="flex items-center">
                <AppDropdown />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader"
}
</script>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()

const display = computed(() => store.getters.getDisplay)

const sidebar = computed(() => store.getters.getSidebar)

const setDisplay = (display) => {
    store.dispatch("setDisplay", display)
}

const setSidebar = (sidebar) => {
    store.dispatch("setSidebar", sidebar)
}
</script>