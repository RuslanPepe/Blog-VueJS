import './bootstrap.js'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import router from "./Router.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tailwindcss/index.css'
import { createPinia } from "pinia";

const pinia = createPinia()

createInertiaApp({
    resolve: name => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(router)
            .use(pinia)
            .use(plugin)
            .mount(el)
    },
})
