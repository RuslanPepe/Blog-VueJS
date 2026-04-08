<template>
    <div class="blockForm w-25 flex mx-auto">
        <div class="mb-3">
            <label for="TitleControlInput" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="postStore.post.title" id="TitleControlInput" >
        </div>
        <div class="mb-3">
            <label for="ContentControlInput" class="form-label">Content</label>
            <input type="text" class="form-control" v-model="postStore.post.content" id="ContentControlInput" >
        </div>
        <div class="mb-3 d-flex justify-content-end">
            <button class="btn btn-outline-primary" @click="postStore.storePost">Submit</button>
        </div>
    </div>
</template>

<script setup>
import {usePostStore} from "../stores/post.js";
import {onBeforeMount} from "vue";

const postStore = usePostStore()
onBeforeMount(() => {
    postStore.clearPost()
})

</script>

<style scoped>

</style>
