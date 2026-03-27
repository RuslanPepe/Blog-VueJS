import { createRouter, createWebHistory } from "vue-router";

import Index from "./Pages/Index.vue";
import Create from "./Pages/Create.vue";
import Edit from "./Pages/Edit.vue";
import Show from "./Pages/Show.vue";

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
        path: '/edit',
        'name': 'post.edit',
        component: Edit
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
