import './bootstrap.js'
import { createApp, h } from 'vue'
// import { createInertiaApp } from '@inertiajs/inertia-vue3'
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import router from "./Router.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tailwindcss/index.css'
import { createPinia } from "pinia";
import Home from "./Pages/Home.vue";

const app = createApp(Home)

app.use(router)
app.use(createPinia())

app.mount('#app')
