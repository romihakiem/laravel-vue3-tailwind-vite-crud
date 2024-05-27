<template>
    <div class="w-full md:max-w-7xl md:mx-auto flex justify-between mb-4">
        <div>Entry Tutorial</div>
        <MyButton @click="router.push({ name: 'Tutorial' })">List All Tutorial</MyButton>
    </div>

    <MyCard class="p-6">
        <TutorialForm></TutorialForm>
    </MyCard>
</template>

<script>
export default {
    name: "TutorialAction"
}
</script>

<script setup>
import { useRouter } from "vue-router"
import TutorialForm from "./Form.vue"

const router = useRouter()
</script>
