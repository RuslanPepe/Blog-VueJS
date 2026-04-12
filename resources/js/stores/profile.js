import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

import router from "../Router.js";

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profileState: {
            status: 0,
            isEdited: 0,
        },
        posts: [],
        loadedPosts: false
    }),

    getters: {
        status(state) {
            return state.profileState.status
        },
        getPosts(state) {
            return state.posts.data
        },
    },

    actions: {
        postRedirect(id) {
          router.push(`/show/${id}`)
        },
        setStatus(val) {
            this.profileState.status = val
        },
        userPosts() {
            console.log(1)
            // if (this.loadedPosts) return
            axios.get('/api/user/posts')
                .then(res => {
                    this.posts = res.data
                    this.loadedPosts = true
                    console.log(this.posts)
                })
                .catch(err => {
                    console.log(err)
                    this.loadedPosts = false
                })
        },
        postGetPaginate(url) {
            axios.get(url)
                .then(res => {
                    this.posts = res.data
                })
        }
    }
})
