<template>
    <div class="blockForm w-25 flex mx-auto">
        <div class="mb-3">
            <label for="TitleControlInput" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="post.title" id="TitleControlInput" >
        </div>
        <div class="mb-3">
            <label for="ContentControlInput" class="form-label">Content</label>
            <input type="text" class="form-control" v-model="post.content" id="ContentControlInput" >
        </div>
        <div class="mb-3 d-flex justify-content-end">
            <button class="btn btn-outline-primary" @click="storePost">Submit</button>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const post = ref({
    title: '',
    content: ''
})

const storePost = () => {
    axios.post('/api/post', post.value)
        .then(res => {
            res.status === 201 ? router.push({ name:'post.show', params: { id: res.data.id } }) : ''
        })
        .catch(err => {
            console.log(err)
        })
}

</script>

<style scoped>

</style>
