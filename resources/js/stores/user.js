import { defineStore } from "pinia";
import { useRouter } from "vue-router";

import router from "../Router.js";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            'name': '',
            'email': '',
            'password': '',
        }
    }),

    actions: {
        userRegister()  {
            axios.get('sanctum/csrf-cookie')
            .then(() => {
                axios.post('/api/register',{
                    'user': this.user,
                }, {
                    headers: {
                        Accept: 'application/json'
                    }
                })
                .then(res => {
                    console.log(res)
                    axios.get('/api/user')
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })

            })
        }
    }
})
