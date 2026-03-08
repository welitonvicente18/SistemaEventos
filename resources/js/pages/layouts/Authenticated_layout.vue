<script setup lang="ts">
import Toaster from '@/pages/components/toast/toaster.vue';
import { UsersIcon, UserPlusIcon, CalendarDaysIcon,CalendarIcon } from '@heroicons/vue/24/outline';
import { toast } from 'vue-sonner';
import { router } from '@inertiajs/vue3';

router.on('flash', (event) => {
    console.log(event.detail)
    if (event.detail.flash.success) {
        toast.success(event.detail.flash.success);
    }
});
</script>

<template>
    <Toaster />
    <div class="min-h-full">
        <div class="relative bg-gray-800 pb-32 dark:bg-gray-800/50">
            <nav class="bg-gray-800 dark:bg-transparent">
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="border-b border-white/10">
                        <div class="flex h-16 items-center justify-between px-4 sm:px-0">
                            <div class="flex items-center">
                                <div class="shrink-0">
                                    <img
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                        class="size-8"
                                    />
                                </div>
                                <div class="hidden md:block">
                                    <div class="ml-10 flex items-baseline space-x-4">
                                        <!-- Current: "bg-gray-900 dark:bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->
                                        <Link
                                            :href="route('admin.dashboard')"
                                            aria-current="page"
                                            class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white dark:bg-gray-950/50"
                                            >Dashboard</Link
                                        >
                                        <!-- Usuário -->
                                        <div class="relative">
                                            <button
                                                popovertarget="desktop-menu-usuarios"
                                                class="inline-flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5
                                                    hover:text-white"
                                            >
                                                <span>Usuário</span>
                                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5">
                                                    <path
                                                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            <el-popover
                                                id="desktop-menu-usuarios"
                                                anchor="bottom"
                                                popover
                                                class="w-screen max-w-max overflow-visible bg-transparent px-4 transition transition-discrete
                                                    [--anchor-gap:--spacing(5)] backdrop:bg-transparent open:flex data-closed:translate-y-1
                                                    data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150
                                                    data-leave:ease-in"
                                            >
                                                <div
                                                    class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-gray-800 text-sm/6 outline-1
                                                        -outline-offset-1 outline-white/10"
                                                >
                                                    <div class="p-4">
                                                        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                                                            <div
                                                                class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg
                                                                    bg-gray-700/50 group-hover:bg-gray-700"
                                                            >
                                                                <UsersIcon class="size-6 text-gray-400 group-hover:text-white" />
                                                            </div>
                                                            <div>
                                                                <Link :href="route('admin.users.index')" class="font-semibold text-white">
                                                                    Listagem de Usuários
                                                                    <span class="absolute inset-0"></span>
                                                                </Link>
                                                                <p class="mt-1 text-gray-400">Acesse seus usuários</p>
                                                            </div>
                                                        </div>
                                                        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                                                            <div
                                                                class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg
                                                                    bg-gray-700/50 group-hover:bg-gray-700"
                                                            >
                                                                <UserPlusIcon class="size-6 text-gray-400 group-hover:text-white" />
                                                            </div>
                                                            <div>
                                                                <Link :href="route('admin.users.create')" class="font-semibold text-white">
                                                                    Criar Novo Usuário
                                                                    <span class="absolute inset-0"></span>
                                                                </Link>
                                                                <p class="mt-1 text-gray-400">Cadastrar novo usuário</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </el-popover>
                                        </div>
                                        <!-- Evento -->
                                        <div class="relative">
                                            <button
                                                popovertarget="desktop-menu-evento"
                                                class="inline-flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5
                                                    hover:text-white"
                                            >
                                                <span>Evento</span>
                                                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5">
                                                    <path
                                                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            <el-popover
                                                id="desktop-menu-evento"
                                                anchor="bottom"
                                                popover
                                                class="w-screen max-w-max overflow-visible bg-transparent px-4 transition transition-discrete
                                                    [--anchor-gap:--spacing(5)] backdrop:bg-transparent open:flex data-closed:translate-y-1
                                                    data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150
                                                    data-leave:ease-in"
                                            >
                                                <div
                                                    class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-gray-800 text-sm/6 outline-1
                                                        -outline-offset-1 outline-white/10"
                                                >
                                                    <div class="p-4">
                                                        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                                                            <div
                                                                class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg
                                                                    bg-gray-700/50 group-hover:bg-gray-700"
                                                            >
                                                                <CalendarDaysIcon class="size-6 text-gray-400 group-hover:text-white" />
                                                            </div>
                                                            <div>
                                                                <Link :href="route('admin.event.index')" class="font-semibold text-white">
                                                                    Listagem de Eventos
                                                                    <span class="absolute inset-0"></span>
                                                                </Link>
                                                                <p class="mt-1 text-gray-400">Acesse seus eventos</p>
                                                            </div>
                                                        </div>
                                                        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                                                            <div
                                                                class="mt-1 flex size-11 flex-none items-center justify-center rounded-lg
                                                                    bg-gray-700/50 group-hover:bg-gray-700"
                                                            >
                                                                <CalendarIcon class="size-6 text-gray-400 group-hover:text-white" />
                                                            </div>
                                                            <div>
                                                                <Link :href="route('admin.event.create')" class="font-semibold text-white">
                                                                    Criar Novo Evento
                                                                    <span class="absolute inset-0"></span>
                                                                </Link>
                                                                <p class="mt-1 text-gray-400">Cadastrar novo eventos</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </el-popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-4 flex items-center md:ml-6">

                                    <!-- Profile dropdown -->
                                    <el-dropdown class="relative ml-3">
                                        <button
                                            class="relative flex max-w-xs items-center rounded-full focus-visible:outline-2
                                                focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        >
                                            <span class="absolute -inset-1.5"></span>
                                            <span class="sr-only">Open user menu</span>
                                            <img
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                                class="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                                            />
                                        </button>
                                        <el-menu
                                            anchor="bottom end"
                                            popover
                                            class="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition
                                                transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform
                                                data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75
                                                data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                                        >
                                            <Link
                                                :href="route('admin.users.edit', 1)"
                                                class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden dark:text-gray-300
                                                    dark:focus:bg-white/5"
                                            >
                                                Minha Conta
                                            </Link>
                                            <Link
                                                :href="route('logout')"
                                                class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden
                                                    dark:text-gray-300"
                                            >
                                                Sair
                                            </Link>
                                        </el-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                            <div class="-mr-2 flex md:hidden">
                                <!-- Mobile menu button -->
                                <button
                                    type="button"
                                    command="--toggle"
                                    commandfor="mobile-menu"
                                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5
                                        hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                                >
                                    <span class="absolute -inset-0.5"></span>
                                    <span class="sr-only">Open main menu</span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        data-slot="icon"
                                        aria-hidden="true"
                                        class="size-6 in-aria-expanded:hidden"
                                    >
                                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        data-slot="icon"
                                        aria-hidden="true"
                                        class="size-6 not-in-aria-expanded:hidden"
                                    >
                                        <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <el-disclosure id="mobile-menu" hidden class="block border-b border-white/10 md:hidden">
                    <div class="space-y-1 px-2 py-3 sm:px-3">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->
                        <a href="#" aria-current="page" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                            >Projects</a
                        >
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                            >Calendar</a
                        >
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                            >Reports</a
                        >
                    </div>
                    <div class="border-t border-white/10 pt-4 pb-3">
                        <div class="flex items-center px-5">
                            <div class="shrink-0">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    class="size-10 rounded-full outline -outline-offset-1 outline-white/10"
                                />
                            </div>
                            <div class="ml-3">
                                <div class="text-base/5 font-medium text-white">Tom Cook</div>
                                <div class="text-sm font-medium text-gray-400">tom@example.com</div>
                            </div>
                            <button
                                type="button"
                                class="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2
                                    focus:outline-offset-2 focus:outline-indigo-500"
                            >
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">View notifications</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    class="size-6"
                                >
                                    <path
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div class="mt-3 space-y-1 px-2">
                            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white">
                                Minha conta
                            </a>
                            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                                >Settings
                            </a>
                            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white">
                                Sign out
                            </a>
                        </div>
                    </div>
                </el-disclosure>
            </nav>
            <slot name="header"></slot>
        </div>
        <!--Conteúdo-->
        <main class="relative -mt-32">
            <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                <slot />
            </div>
        </main>
    </div>
</template>

<style scoped></style>
