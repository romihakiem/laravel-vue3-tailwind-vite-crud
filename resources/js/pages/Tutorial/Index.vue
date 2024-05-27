<template>
    <div class="w-full md:max-w-7xl md:mx-auto flex justify-between mb-4">
        <div>Tutorials</div>
        <MyButton @click="router.push({ name: 'TutorialCreate' })">Add New Tutorial</MyButton>
    </div>

    <MyCard>
        <div class="flex flex-col" ref="loadingContainer">
            <div class="-my-2">
                <div class="py-2 align-middle inline-block min-w-full">
                    <div class="border-b border-gray-200">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        class="sm:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        #</th>
                                    <th
                                        class="sm:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title</th>
                                    <th
                                        class="sm:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Description</th>
                                    <th
                                        class="sm:px-2 xl:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr class="hover:bg-gray-100" v-for="(tutorial, index) in tutorials.data"
                                    :key="tutorial.id">
                                    <td class="px-2 py-4 text-sm text-gray-500">
                                        {{ rowNumber(index + 1) }}
                                    </td>
                                    <td class="px-2 py-4 text-sm">
                                        {{ tutorial.title }}
                                    </td>
                                    <td class="px-2 py-4 text-sm">
                                        {{ tutorial.description }}
                                    </td>
                                    <td class="px-2 py-4 text-sm">
                                        <DropdownMenu>
                                            <DropdownItem icon="fas fa-arrow-circle-right"
                                                @click="router.push({ name: 'TutorialShow', params: { id: tutorial.id } })">
                                                Show</DropdownItem>
                                            <DropdownItem icon="fas fa-edit"
                                                @click="router.push({ name: 'TutorialEdit', params: { id: tutorial.id } })">
                                                Edit</DropdownItem>
                                            <DropdownItem icon="fas fa-trash" @click="deleteItem(tutorial.id)">Delete
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                                <tr v-if="tutorials.data.length === 0">
                                    <td colspan="4" class="px-2 py-4 text-sm text-gray-500">
                                        Could not find any data.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </MyCard>

    <Pagination class="mt-6" :links="tutorials.links" @click="listItems" />
</template>

<script>
export default {
    name: "TutorialList"
}
</script>

<script setup>
import { onMounted, inject, ref, reactive } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import Swal from "sweetalert2"

const router = useRouter()
const store = useStore()

const $loading = inject("$loading")

const loadingContainer = ref(false)
const tutorials = reactive({
    current_page: 0,
    per_page: 0,
    data: [],
    links: []
})

const listItems = async (page) => {
    if (isNaN(parseInt(page))) return

    let loader = $loading.show({ container: loadingContainer.value })
    await store.dispatch("tutorial/list", {
        page
    }).then((response) => {
        loader.hide()
        Object.assign(tutorials, response)
    }).catch((e) => {
        loader.hide()
    })
}

const confirmDelete = async () => {
    return Swal.fire({
        icon: "warning",
        title: "Are you sure?",
        text: "You won\"t be able to reverse this action. Proceed to delete?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
    }).then((result) => {
        return result.isConfirmed ? true : false
    })
}

const deleteItem = async (id) => {
    if (await confirmDelete()) {
        let loader = $loading.show({ container: loadingContainer.value })
        await store.dispatch("tutorial/delete", {
            id
        }).then(() => {
            loader.hide()
            listItems(1)
        }).catch((e) => {
            loader.hide()
        })
    }
}

const rowNumber = (num) => {
    return ((tutorials.current_page - 1) * tutorials.per_page) + num
}

onMounted(() => {
    listItems(1)
})
</script>
