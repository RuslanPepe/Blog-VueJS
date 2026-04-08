import { createRouter, createWebHistory } from "vue-router";

import Index from "./Pages/Index.vue";
import Create from "./Pages/Create.vue";
import Edit from "./Pages/Edit.vue";
import Show from "./Pages/Show.vue";
import Registration from "./Pages/Registration.vue";
import Login from "./Pages/Login.vue";
// import { useAuthStore } from "./stores/auth.js";

const routes = [
    {
        path: '/',
        'name': 'post.index',
        component: Index
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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async(to, from) => {
    let isAuth = null

    try {
        const response = await axios.get('/api/user')
        isAuth = !!response.data
    } catch (e){
        isAuth = false
    }

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
