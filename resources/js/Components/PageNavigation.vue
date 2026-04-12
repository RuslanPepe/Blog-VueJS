<template>
    <nav aria-label="Page navigation" class="mx-auto d-flex w-25 justify-content-center">
        <PageNavigationButton :url="postStore.posts.links?.prev" label="Prev" />
        <PageNavigationButton :url="postStore.posts.links?.next" label="Next" />
        <PageNavigationButton :url="postStore.posts.links?.last" label="Last" />
        <PageNavigationButton :url="postStore.posts.links?.first" label="First" />
    </nav>
</template>

<script setup>
import PageNavigationButton from "./PageNavigationButton.vue";
import {usePostStore} from "../stores/post.js";

const postStore = usePostStore()

</script>

<style scoped>

</style>
