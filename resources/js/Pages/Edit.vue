<template>
    <div class="w-25 mx-auto d-flex flex-column">
        <div class="mb-3">
            <label for="titleFormControlInput1" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="post.title" id="titleFormControlInput1" placeholder="title">
        </div>
        <div class="mb-3">
            <label for="contentFormControlInput1" class="form-label">Content</label>
            <textarea class="form-control" v-model="post.content" id="contentFormControlInput1" rows="5" placeholder="Content"></textarea>
        </div>
        <button class="btn btn-outline-success align-self-end mt-auto" @click="updatePost">Update</button>
    </div>
</template>

<script setup>

import {onMounted, ref} from "vue";
import router from "../Router.js";

const post = ref({
    'id': '',
    'title': '',
    'content': '',
})

onMounted(() => {
    getPost()
})

const getPost = () => {
    axios.get(`/api/post/${router.currentRoute.value.params.id}`)
        .then(res => {
            post.value = res.data.data
            console.log(res)
        })
}

const updatePost = () => {
    axios.patch(`/api/post/${post.value.id}`, post.value)
        .then(res => {
            res.status === 202 ? router.push({ name:'post.show', params: { id: res.data.id } }) : ''
        })
        .catch(err => {
            console.log(err)
        })
}

</script>

<style scoped>

</style>
