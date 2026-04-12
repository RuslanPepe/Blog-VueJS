<template>
    <nav aria-label="Page navigation" class="mx-auto d-flex w-25 justify-content-center">
        <ProfilePostPaginateButton :url="profileStore.posts.links?.prev" label="Prev" />
        <ProfilePostPaginateButton :url="profileStore.posts.links?.next" label="Next" />
        <ProfilePostPaginateButton :url="profileStore.posts.links?.last" label="Last" />
        <ProfilePostPaginateButton :url="profileStore.posts.links?.first" label="First" />
    </nav>
</template>

<script setup>
import {useProfileStore} from "../stores/profile.js";
import ProfilePostPaginateButton from "./ProfilePostPaginateButton.vue";

const profileStore = useProfileStore()

</script>

<style scoped>

</style>
