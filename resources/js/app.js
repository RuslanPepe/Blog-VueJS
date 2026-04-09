import './bootstrap.js'
import { createApp, h } from 'vue'
// import { createInertiaApp } from '@inertiajs/inertia-vue3'
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import router from "./Router.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import { createPinia } from "pinia";
import Index from "./Pages/Index.vue";
import {useUserStore} from "./stores/user.js";

const app = createApp(Index)

app.use(createPinia())

await useUserStore().userFetch()

app.use(router)

app.mount('#app')
