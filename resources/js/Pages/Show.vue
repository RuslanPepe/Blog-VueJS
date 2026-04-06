<template>
    <div class="w-50 mx-auto" v-if="postStore.post">
        <p class="title">{{ postStore.post.id+': '+postStore.post.title }}</p>

        <p class="content">Content: {{ postStore.post.content }}</p>
        <div class="update-btn d-flex flex-column">
            <router-link :to="{ name: `post.edit`, params: { id: postStore.post.id } }" class="btn btn-outline-success align-self-end mt-auto">edit</router-link>
        </div>
    </div>
</template>

<script setup>
import router from "../Router.js";
import {onBeforeMount, onMounted} from "vue";
import {usePostStore} from "../stores/post.js";

const postStore = usePostStore()

onBeforeMount(() => {
    postStore.getPost()
})

</script>

<style scoped>
.title {
    font-size: 24px;
    font-weight: 600;
}
.content {
    font-size: 18px;
}
</style>
