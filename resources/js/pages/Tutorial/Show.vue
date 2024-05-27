<template>
    <div class="w-full md:max-w-7xl md:mx-auto flex justify-between mb-4">
        <div>Show Tutorial</div>
        <MyButton @click="router.push({ name: 'Tutorial' })">List All Tutorials</MyButton>
    </div>

    <MyCard>
        <div class="p-6 relative" ref="loadingContainer">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                        Title
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                        {{ tutorial.title }}
                    </dd>
                </div>
                <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                        Description
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                        {{ tutorial.description }}
                    </dd>
                </div>
            </dl>
        </div>
    </MyCard>
</template>

<script>
export default {
    name: "TutorialShow"
}
</script>

<script setup>
import { onMounted, inject, reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"

const route = useRoute()
const router = useRouter()
const store = useStore()

const $loading = inject("$loading")

const loadingContainer = ref(false)

const tutorial = reactive({})

const getItem = async () => {
    let loader = $loading.show({ container: loadingContainer.value })
    await store.dispatch("tutorial/get", {
        id: route.params.id
    }).then((response) => {
        loader.hide()
        Object.assign(tutorial, response)
    }).catch((e) => {
        loader.hide()
        router.push({ name: "Tutorial" })
    })
}

onMounted(async () => {
    await getItem()
})
</script>
