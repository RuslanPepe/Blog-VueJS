<template>
    <div class="w-50 mx-auto" v-if="post">
        <p class="title">{{ post.id+': '+post.title }}</p>

        <p class="content">Content: {{ post.content }}</p>
    </div>
</template>

<script setup>
import router from "../Router.js";
import {onMounted, reactive, ref} from "vue";

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
