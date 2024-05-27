<template>
    <div class="relative h-screen flex overflow-hidden bg-gray-100 dark:bg-dark-body">
        <AppSidebar></AppSidebar>

        <div class="flex-1 flex flex-col w-0 overflow-hidden">
            <AppHeader></AppHeader>

            <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                <div class="space-y-4 p-4">
                    <router-view />
                </div>

                <AppFooter></AppFooter>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppLayout",
}
</script>