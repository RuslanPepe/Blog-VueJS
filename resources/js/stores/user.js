import { defineStore } from "pinia";
import { useRouter } from "vue-router";

import router from "../Router.js";
import axios from "axios";
import {useAuthStore} from "./auth.js";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        loaded: false,
        userRegData: {
            'name': '',
            'email': '',
            'password': null,
            'password_confirmation': null
        },
        userLoginData: {
            'email': '',
            'password': null,
        },
        isAuth: null
    }),

    getters: {
        isAuthGet: (state) => !!state.user
    },

    actions: {
        async userFetch() {
            if (this.loaded) return

            await axios.get('/api/user')
                .then(res => {
                    this.user = res.data.user
                    this.isAuth = this.isAuthGet
                    console.log(this.user)
                    console.log(this.isAuth)
                })
                .catch(() => {
                    this.user = null
                    this.isAuth = false
                })
            this.loaded = true
        },

        userRegister()  {
            axios.get('sanctum/csrf-cookie')
            .then(() => {
                axios.post('/api/register',{
                    'user': this.userRegData,
                }, {
                    headers: {
                        Accept: 'application/json'
                    }
                })
                .then(res => {
                    console.log(res)
                    if (res?.status === 201){
                        this.userFetch().then(() => {
                            router.push('/')
                        })
                    }
                })

            })
        },
        userLogin()  {
            axios.get('sanctum/csrf-cookie')
            .then(() => {
                axios.post('/api/login',{
                    'user': this.userLoginData,
                }, {
                    headers: {
                        Accept: 'application/json'
                    }
                })
                .then(res => {
                    console.log(res)
                    if (res?.status === 201){
                        this.userFetch().then(() => {
                            router.push('/')
                        })
                    }
                })
            })
        },
        userLogout() {
            axios.post('/api/logout')
                .then(res => {
                    console.log(res)
                    this.userFetch().then(() => {
                        router.push('/reg')
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
        // userCheckAuth() {
        //   axios.get('/api/user')
        //       .then(res => {
        //           this.isAuth = !!res.data.id
        //           console.log(this.isAuth)
        //       })
        // }
    }
})
