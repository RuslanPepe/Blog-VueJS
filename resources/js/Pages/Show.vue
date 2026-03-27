<template>
    <div class="w-50 mx-auto" v-if="post">
        <p class="title">{{ post.id+': '+post.title }}</p>

        <p class="content">Content: {{ post.content }}</p>
    </div>
    <div class="update-btn w-50 mx-auto d-flex flex-column">
        <router-link :to="{ name: `post.edit`, params: { id: post.id } }" class="btn btn-outline-success align-self-end mt-auto">edit</router-link>
    </div>
</template>

<script setup>
import router from "../Router.js";
import {onMounted, ref} from "vue";

const post = ref([])

onMounted(() => {
    getPosts()
})

const getPosts = () => {
    axios.get(`/api/post/${router.currentRoute.value.params.id}`)
        .then(res => {
            console.log(res)
            post.value = res.data.data
        })
}

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
