<template>
    <div class="row justify-content-evenly">
        <div class="card col-2 mx-1 my-2" v-for="post in posts.data" :key="post.id">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ post.id }}</h5>
                <p class="card-text">{{ post.title }}</p>
                <div class="row justify-content-evenly align-items-end mt-auto">
                    <router-link :to="`/show/${post.id}`" class="btn btn-outline-primary mt-auto col-5">show</router-link>
                    <button class="btn btn-outline-danger mt-auto col-5" @click="destroyPost(post.id)">delete</button>
                </div>
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
import {useRouter} from "vue-router";

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
        })
}

const destroyPost = (id) => {
    axios.delete(`/api/post/${id}`)
        .then(res => {
            res.status === 200 ? getPosts() : ''
            console.log(res)
        })
        .catch(err => {
        console.log(err)
    })
}

</script>

<style scoped>
.paginate-link {
    cursor: pointer;
}
</style>
