<template>
    <div class="col-9 py-4 p-5 pt-0">
        <p class="fs-4 text-center mb-5">Мои посты:</p>
        <div class="blockPosts flex-column">
            <div class="w-100" style="cursor: pointer;" v-for="post in profileStore.getPosts" :key="post.id" @click="profileStore.postRedirect(post.id)">
                <p class="fs-5">{{ post.id }}: {{ post.title }}</p>
                <p class="line-clamp">
                    {{ post.content }}
                </p>
                <hr>
            </div>
        </div>
        <profile-posts-paginate />
    </div>
</template>

<script setup>
import {onBeforeMount} from "vue";
import {useProfileStore} from "../stores/profile.js";
import ProfilePostsPaginate from "./ProfilePostsPaginate.vue";
import ProfileDataComponent from "./ProfileDataComponent.vue";

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
