<template>
    <div class="blockForm w-25 flex mx-auto">
        <div class="mb-3">
            <label for="TitleControlInput" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="post.title" id="TitleControlInput" >
        </div>
        <div class="mb-3">
            <label for="ContentControlInput" class="form-label">Content</label>
            <input type="text" class="form-control" v-model="post.content" id="ContentControlInput" >
        </div>
        <div class="mb-3 d-flex justify-content-end">
            <button class="btn btn-outline-primary">Submit</button>
        </div>
    </div>
    {{ post }}
</template>

<script setup>
import {reactive, ref} from "vue";

const post = reactive({
    title: '',
    content: ''
})

</script>

<style scoped>

</style>
