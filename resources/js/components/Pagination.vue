<template>
    <div v-if="links.length > 3">
        <div class="flex flex-wrap">
            <template v-for="(link, p) in links" :key="p">
                <button type="button"
                    class="mr-1 mb-1 px-4 py-2 text-sm leading-4 border rounded hover:bg-blue-700 hover:text-white dark:text-white"
                    :class="{ 'bg-indigo-500 text-white': link.active }" v-html="link.label"
                    @click="pageLink(link.url)" />
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        links: Array
    },
    methods: {
        pageLink(url) {
            if (url === null) return

            const params = new URL(url).searchParams
            this.$emit("click", params.get("current_page"))
        }
    }
}
</script>