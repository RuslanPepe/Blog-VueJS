<template>

<!--    {{ postStore.posts.data[0] }}-->

    <div class="row justify-content-evenly">
        <div class="card col-2 mx-1 my-2" v-for="post in postStore.posts.data" :key="post.id">
            <div class="card-body d-flex flex-column">
                <div class="d-flex align-items-start justify-content-between">
                    <h5 class="card-title">{{ post.id }}</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" @click="post.isLiked = !post.isLiked" :fill="post.isLiked ? 'pink' : 'none'" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-25 text-pink-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <p class="card-text my-3">{{ post.title }}</p>
                <div class="row justify-content-evenly align-items-end mt-auto">
                    <router-link :to="`/show/${post.id}`" class="btn btn-outline-primary mt-auto col-5">show</router-link>
                    <button class="btn btn-outline-danger mt-auto col-5" @click="postStore.destroyPost(post.id)">delete</button>
                </div>
            </div>
        </div>
    </div>

    <PageNavigation v-show="postStore.posts" @updatePosts="postStore.posts = $event" :links="postStore.posts.links" />

</template>

<script setup>
import {onBeforeMount, onMounted, ref} from "vue";
import PageNavigation from "../Components/PageNavigation.vue";
import {usePostStore} from "../stores/post.js";
import {onBeforeUnmount} from "vue";
import {useProfileStore} from "../stores/profile.js";

const postStore = usePostStore()

onBeforeMount(() => {
    postStore.getPosts()
})

</script>

<style scoped>
.Heart {
    width: 32px;
}

.liked {
    fill: rgba(133,0,0,.7);
}
</style>
