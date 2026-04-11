import { createRouter, createWebHistory } from "vue-router";

import Home from "./Pages/Home.vue";
import Create from "./Pages/Create.vue";
import Edit from "./Pages/Edit.vue";
import Show from "./Pages/Show.vue";
import Registration from "./Pages/Registration.vue";
import Login from "./Pages/Login.vue";
import axios from "axios";
import {useAuthStore} from "./stores/auth.js";
import {useUserStore} from "./stores/user.js";
import Profile from "./Pages/Profile.vue";
// import { useAuthStore } from "./stores/auth.js";

const routes = [
    {
        path: '/',
        'name': 'post.index',
        component: Home
    },
    {
        path: '/create',
        'name': 'post.create',
        component: Create
    },
    {
        path: '/show/:id',
        'name': 'post.show',
        component: Show
    },
    {
        path: '/edit/:id',
        'name': 'post.edit',
        component: Edit
    },
    {
        path: '/reg',
        'name': 'user.reg',
        component: Registration
    },
    {
        path: '/login',
        'name': 'user.login',
        component: Login
    },
    {
        path: '/profile',
        'name': 'user.profile',
        component: Profile
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async(to, from) => {
    const useUser = useUserStore()
    const isAuth = useUser.isAuth

    const publicPages = ['user.login', 'user.reg']
    const pathAuth = publicPages.includes(to.name)

    if (pathAuth && !isAuth) {
        return true
    }

    if (!pathAuth && !isAuth) {
        return {name:'user.reg'}
    }

    if (pathAuth && isAuth) {
        return {name:'post.index'}
    }

    return true
})

export default router
