import '../css/app.css';
import 'vue-sonner/style.css';
import '@tailwindplus/elements';

import { createApp, h } from 'vue';
import type { DefineComponent } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import VueTheMask from 'vue-the-mask'
import { ZiggyVue } from 'ziggy-js';
import { formatDatePtBr } from './helpers/formaDate';

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

void createInertiaApp({
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(VueTheMask)
            .mixin({
                // Registrando globalmente a função $formatDate
                methods: {
                    $formatDate: formatDatePtBr
                }
            })
            .component('Link', Link)
            .mount(el);
    },
});
