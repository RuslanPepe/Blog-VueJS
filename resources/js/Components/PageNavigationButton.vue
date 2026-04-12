<template>
    <button type="button" class="mx-2 paginate-link py-3" :style="!props.url ? 'color: rgba(0,0,0,.6); cursor: default' : ''" :disabled="!props.url" @click="postStore.postGetPaginate(url)">{{ props.label }}</button>
</template>

<script setup>

import {usePostStore} from "../stores/post.js";

const props = defineProps({
    url: '',
    label: ''
})

const postStore = usePostStore()

</script>

<style scoped>
.paginate-link {
    cursor: pointer;
    border: none;
    background: none;
    //border-radius: 5px;
}
</style>
