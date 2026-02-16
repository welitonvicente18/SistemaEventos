<script setup lang="ts">
    import Authenticated_layout from '@/pages/admin/layouts/Authenticated_layout.vue';
    import { useForm } from '@inertiajs/vue3';
    import { toast } from 'vue-sonner';

    const { user } = defineProps({
        user: Object,
        avatarUrl: String,
    })

const form = useForm({
    name: user.name ?? '',
    email: user.email ?? '',
    password: user.password ?? '',
    fone: user.fone ?? '',
    avatar: user.avatar ?? '',
});

const handleSubmit = () => {
    if(user.id){
        form.put(route('admin.users.update', user.id), {
            preserveScroll: true,
            onError: (errors) => {
                for(const message of Object.values(errors)){
                    toast.error('Erro atualizar os dados!', {description: message});
                }
            }
        });
    }else{
        form.post(route('admin.users.store'), {
            preserveScroll: true,
            onError: (errors) => {
                for(const message of Object.values(errors)){
                    toast.error('Erro criar o usuário!', {description: message});
                }
            }
        });
    }

    }
const handleFileChange = () => {
    if ('target' in event) {
        form.avatar = event.target.files[0];
    }
}
</script>


<template>
    <Authenticated_layout>
        <template #header>
            <header class="py-10">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-white">Formulário do Usuário</h1>
                </div>
            </header>
        </template>
        <div
            class="overflow-hidden rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6 dark:bg-gray-800 dark:shadow-none dark:outline
                dark:-outline-offset-1 dark:outline-white/10">
            <form @submit.prevent="handleSubmit">
                <div class="space-y-12">
                    <div class="border-b border-white/10 pb-12">
                        <div class="border-b border-white/10 pb-5">
                            <div class="5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <label for="first-name" class="block text-sm/6 font-medium text-white">Nome</label>
                                    <div class="mt-2">
                                        <input id="first-name" type="text" name="first-name" v-model="form.name" autocomplete="given-name" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div class="clear"></div>
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm/6 font-medium text-white">E-mail</label>
                                    <div class="mt-2">
                                        <input id="email" type="email" name="email" v-model="form.email" autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm/6 font-medium text-white">Telefone</label>
                                    <div class="mt-2">
                                        <input id="email" type="text" name="fone" v-model="form.fone" v-mask="'(##) #####-####'" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm/6 font-medium text-white">Senha</label>
                                    <div class="mt-2">
                                        <input id="email" type="password" name="password" v-model="form.password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="col-span-full">
                                <label for="photo" class="block text-sm/6 font-medium text-white">Minha Foto</label>
                                <div class="mt-2 flex items-center gap-x-3">
                                    <img v-if="avatarUrl" :src="avatarUrl" class="w-16 h-16 rounded-full object-cover"  alt="avatar"/>
                                    <svg v-if="!avatarUrl" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-12 text-gray-500">
                                        <path d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                    <input id="photo" type="file" name="avatar" @change="handleFileChange" class="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20"/>
                                </div>
                                <p class="text-xs/5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <Link :href="route('admin.users.index')">
                        <button type="button" class="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                            Cancelar
                        </button>
                    </Link>
                    <button type="submit" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Salvar</button>
                </div>
            </form>
        </div>
    </Authenticated_layout>
</template>
