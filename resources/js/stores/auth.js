import { defineStore } from 'pinia'
import axios from 'axios'
import {useUserStore} from "./user.js";

export const useAuthStore = defineStore('auth', {
    actions: {

        // userLogout() {
        //     axios.post('/api/logout')
        //         .then(res => {
        //             console.log(res)
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // }

    }
})
