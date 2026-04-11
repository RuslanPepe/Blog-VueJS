<template>
    <div class="blockPosts flex-column">
        <div class="w-100" v-for="post in profileStore.getPosts" :key="post.id" @click="profileStore.postRedirect(post.id)">
            <p class="fs-5">{{ post.id }}: {{ post.title }}</p>
            <p class="line-clamp">
                {{ post.content }}
            </p>
            <hr>
        </div>
    </div>
</template>

<script setup>
import {onBeforeMount} from "vue";
import {useProfileStore} from "../stores/profile.js";

const profileStore = useProfileStore()

onBeforeMount(() => {
    profileStore.userPosts()
})


</script>

<style scoped>
.line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
