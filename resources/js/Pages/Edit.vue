<template>
    <div class="w-25 mx-auto d-flex flex-column">
        <div class="mb-3">
            <label for="titleFormControlInput1" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="postStore.post.title" id="titleFormControlInput1" placeholder="title">
        </div>
        <div class="mb-3">
            <label for="contentFormControlInput1" class="form-label">Content</label>
            <textarea class="form-control" v-model="postStore.post.content" id="contentFormControlInput1" rows="5" placeholder="Content"></textarea>
        </div>
        <button class="btn btn-outline-success align-self-end mt-auto" @click="postStore.updatePost">Update</button>
    </div>
</template>

<script setup>

import {onBeforeMount, onMounted, ref} from "vue";
import router from "../Router.js";
import {usePostStore} from "../stores/post.js";

const postStore = usePostStore()

onBeforeMount(() => {
    postStore.getPost()
})

</script>

<style scoped>

</style>
