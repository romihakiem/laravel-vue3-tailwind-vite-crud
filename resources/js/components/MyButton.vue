<template>
    <button type="button" class="
            text-white
            bg-indigo-500
            hover:bg-blue-700
            focus:bg-blue-700
            font-medium
            text-sm
            px-5
            py-2
            text-center
            dark:bg-blue-700
            dark:hover:bg-indigo-500
            dark:focus:bg-indigo-500
            border 
            rounded
        ">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "MyButton"
}
</script>

<script setup>
</script>
