import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        loaded: false
    }),

    getters: {
        isAuth: (state) => !!state.user
    },

    actions: {
        async fetchUser() {
            await axios.get('/api/user')
                .then(res => {
                    this.user = res
                })
                .catch(() => {
                    this.user = null
                })
        },

        // async login(data) {
        //     await axios.get('/sanctum/csrf-cookie')
        //
        //     await axios.post('/login', data)
        //
        //     await this.fetchUser()
        // },
        //
        // async logout() {
        //     await axios.post('/logout')
        //     this.user = null
        // }
    }
})
