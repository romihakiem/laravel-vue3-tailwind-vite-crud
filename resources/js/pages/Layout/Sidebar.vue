<template>
    <AppMobile></AppMobile>

    <div v-if="sidebar == 'full'" class="hidden lg:flex lg:shrink-0">
        <div class="
                flex flex-col transition-all duration-200 ease-out
                border-r border-primary dark:border-gray-700
                pt-0
                pb-4
                bg-gray-800 dark:bg-dark-header
                w-64
            ">
            <div class="h-0 flex-1 flex flex-col scroller-x">
                <div class="shrink-0 h-16 bg-gray-800 dark:bg-dark-header">
                    <img src="/images/logo.png" class="h-10 ml-4 mt-3" />
                </div>
                <nav class="px-0 mt-0">
                    <AppNavigation />
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppSidebar"
}
</script>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()

const sidebar = computed(() => store.getters.getSidebar)
</script>