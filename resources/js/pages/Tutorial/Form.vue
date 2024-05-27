<template>
    <div class="w-full">
        <form @submit.prevent="submit">
            <div class="relative" ref="loadingContainer">
                <div class="grid grid-cols-2 gap-6">
                    <div class="col-span-2">
                        <MyInput type="text" v-model="form.title" name="title" label="Title"
                            v-model:error="formErrors.title" />
                    </div>
                    <div class="col-span-2">
                        <MyTextarea v-model="form.description" name="description" label="Description" />
                    </div>
                </div>
            </div>
            <MyButton class="mt-2" type="submit">{{ route.params.id ? 'Update' : 'Save' }}</MyButton>
        </form>
    </div>
</template>

<script>
export default {
    name: "TutorialForm"
}
</script>

<script setup>
import { onMounted, computed, inject, ref, reactive } from "vue"
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router"
import { useStore } from "vuex"

const route = useRoute()
const router = useRouter()
const store = useStore()

const $loading = inject("$loading")

const loadingContainer = ref(false)

const initForm = {
    title: "",
    description: ""
}

const formErrors = computed(() => store.getters["tutorial/getFormErrors"])

const form = reactive({ ...initForm })

const submit = async () => {
    let loader = $loading.show({ container: loadingContainer.value })
    let action = route.params.id ? "update" : "create"
    await store.dispatch("tutorial/" + action, {
        form,
        id: route.params.id,
    }).then((response) => {
        loader.hide()
        router.push({ name: "Tutorial" })
    }).catch((e) => {
        loader.hide()
    })
}

const getItem = async () => {
    let loader = $loading.show({ container: loadingContainer.value })
    await store.dispatch("tutorial/get", {
        id: route.params.id
    }).then((response) => {
        loader.hide()
        Object.assign(form, response)
    }).catch((e) => {
        loader.hide()
        router.push({ name: "Tutorial" })
    })
}

const resetFormErrors = () => {
    store.dispatch("tutorial/resetFormErrors")
}

onMounted(async () => {
    if (route.params.id) {
        await getItem()
    }
})

onBeforeRouteLeave((to, from) => {
    resetFormErrors()
})
</script>
