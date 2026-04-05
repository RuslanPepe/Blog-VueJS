<template>
    <nav aria-label="Page navigation" class="mx-auto d-flex w-25 justify-content-center">
        <PageNavigationButton @paginate="paginatePost($event)" :url="props.links?.prev" label="Prev" />
        <PageNavigationButton @paginate="paginatePost($event)" :url="props.links?.next" label="Next" />
        <PageNavigationButton @paginate="paginatePost($event)" :url="props.links?.last" label="Last" />
        <PageNavigationButton @paginate="paginatePost($event)" :url="props.links?.first" label="First" />
    </nav>
</template>

<script setup>

import {onMounted} from "vue";
import PageNavigationButton from "./PageNavigationButton.vue";

const props = defineProps({
    links: Object
})

const emit = defineEmits(['updatePosts'])

// onMounted(() => {
//     console.log(props.links)
// })


const paginatePost = (url) => {

    axios.get(url)
        .then(res => {
            emit('updatePosts', res.data)
        })
        .catch(err => {
            console.log(err);
        })
}

</script>

<style scoped>

</style>
