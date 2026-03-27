<template>
    <div class="row justify-content-evenly">
        <div class="card col-2 mx-1 my-2" v-for="post in posts.data" :key="post.id">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ post.id }}</h5>
                <p class="card-text">{{ post.title }}</p>
                <router-link :to="`/show/${post.id}`" class="btn btn-outline-primary align-self-end mt-auto">show</router-link>
            </div>
        </div>
    </div>

    <nav aria-label="Page navigation">
        <ul class="pagination my-3 mx-2">
            <li class="page-item mx-1 paginate-link" @click="paginatePost(posts.links.prev)">Prev</li>
            <li class="page-item mx-1 paginate-link" @click="paginatePost(posts.links.next)">Next</li>
            <li class="page-item mx-1 paginate-link" @click="paginatePost(posts.links.last)">Last</li>
            <li class="page-item mx-1 paginate-link" @click="paginatePost(posts.links.first)">First</li>
        </ul>
    </nav>

<!--    {{ posts.links }}-->
</template>

<script setup>

import {onMounted, reactive, ref} from "vue";

const posts = ref([])

onMounted(() => {
    getPosts()
})

const paginatePost = (url) => {
    axios.get(url)
        .then(res => {
            posts.value = res.data
        })
}

const getPosts = () => {
    axios.get('/api/posts')
        .then(res => {
            posts.value = res.data
            console.log(posts.value)
        })
}

</script>

<style scoped>
.paginate-link {
    cursor: pointer;
}
</style>
