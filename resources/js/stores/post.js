import { defineStore } from "pinia";
import { useRouter } from "vue-router";

import router from "../Router.js";
import axios from "axios";

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: [],
        post: {
            id: null,
            title: '',
            content: '',
        }
    }),

    actions: {
        getPosts() {
            axios.get('/api/posts')
                .then(res => {
                    this.posts = res.data
                    console.log(this.posts)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        getPost() {
            axios.get(`/api/post/${router.currentRoute.value.params.id}`)
                .then(res => {
                    this.post = res.data.data
                    // console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        storePost() {
            axios.post('/api/post', this.post)
                .then(res => {
                    res.status === 201 ? router.push({ name:'post.show', params: { id: res.data.id } }) : ''
                })
                .catch(err => {
                    console.log(err)
                })
        },

        updatePost() {
            axios.patch(`/api/post/${this.post.id}`, this.post)
                .then(res => {
                    res.status === 202 ? router.push({ name:'post.show', params: { id: res.data.id } }) : ''
                })
                .catch(err => {
                    console.log(err)
                })
        },

        destroyPost(id) {
            axios.delete(`/api/post/${id}`)
                .then(res => {
                    res.status === 200 ? this.getPosts() : ''
                })
                .catch(err => {
                    console.log(err)
                })
        },

        clearPost() {
            this.post = {
                id: null,
                title: '',
                content: '',
            }
        },

        postLike(post) {
            console.log(post.is_liked)
            post.isLiked = !post.isLiked
            axios.post('/api/post/like', {id: post.id, isLiked: post.isLiked})
                .then(res => {
                    console.log(res)
                })
        },

        postGetPaginate(url) {
            axios.get(url)
                .then(res => {
                    this.posts = res.data
                })
        },
    }
})
