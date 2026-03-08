<script setup lang="ts">
import Authenticated_layout from '@/pages/layouts/Authenticated_layout.vue';
import { useForm } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';
import { ArrowLongLeftIcon, HandThumbUpIcon } from '@heroicons/vue/24/outline';

const { subscription } = defineProps({
    subscription: Object,
});

const form = useForm({
    event_id: subscription.event_id ?? '',
    name: subscription.name ?? '',
    email: subscription.email ?? '',
    phone: subscription.phone ?? '',
    status: subscription.status ?? '',
});

const handleSubmit = () => {
    if (subscription.id) {
        form.put(route('admin.subscription.update', subscription.id), {
            preserveScroll: true,
            onError: (errors) => {
                for (const message of Object.values(errors)) {
                    toast.error('Erro atualizar os dados!', { description: message });
                }
            },
        });
    } else {
        form.post(route('admin.subscription.update'), {
            preserveScroll: true,
            onError: (errors) => {
                for (const message of Object.values(errors)) {
                    toast.error('Erro criar o evento!', { description: message });
                }
            },
        });
    }
};
const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        form.image = target.files[0];
    }
};
</script>

<template>
    <Authenticated_layout>
        <template #header>
            <header class="py-10">
                <div class="mx-auto flex max-w-7xl justify-between">
                    <div class="justify-items-start px-4 sm:px-6 lg:px-8 ">
                        <h1 class="text-3xl font-bold tracking-tight text-white">
                            {{ subscription.id ? 'Atualizar Inscrito' : 'Cadastro de Inscrito' }}
                        </h1>
                        <Link :href="route('admin.event.index')">
                        <p class="text-zinc-500 flex mt-2 items-center gap-2">
                            <ArrowLongLeftIcon class="h-5 w-5" /> Voltar
                        </p>
                        </Link>
                    </div>
                </div>
            </header>
        </template>
        <div class="overflow-hidden rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6 dark:bg-gray-800 dark:shadow-none dark:outline
                dark:-outline-offset-1 dark:outline-white/10">
            <form @submit.prevent="handleSubmit">
                <div class="space-y-12">
                    <div class="border-b border-white/10 pb-12">
                        <div class="pb-5">
                            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <label for="first-name" class="block text-sm/6 font-medium text-white">Nome</label>
                                    <div class="mt-2">
                                        <input id="first-name" type="text" name="first-name" v-model="form.name" required autocomplete="given-name" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-3"></div>
                                <div class="sm:col-span-3">
                                    <label for="data-encerramento" class="block text-sm/6 font-medium text-white">E-mail</label>
                                    <div class="mt-2">
                                        <input id="data-encerramento" type="email" name="email" required v-model="form.email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="phone" class="block text-sm/6 font-medium text-white">Telefone</label>
                                    <div class="mt-2">
                                        <input id="phone" type="text" name="phone" v-model="form.phone" v-mask="'(##) #####-####'" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm/6 font-medium text-white">Confirmação</label>
                                    <div class="mt-2 grid grid-cols-2 gap-10">
                                        <span class="inline-flex items-center gap-2 rounded-lg px-2 py-1" :class="{
                                            'bg-green-600 text-white': subscription.status === 1,
                                        }">
                                            <HandThumbUpIcon class="h-4 w-4" /> Confirmado
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <Link :href="route('admin.event.show', subscription.event_id)">
                    <button type="button" class="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2
                                focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Cancelar
                    </button>
                    </Link>
                    <button type="submit" class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-green-600">
                        {{ subscription.id ? 'Atualizar' : 'Cadastrar' }}
                    </button>
                </div>
            </form>
        </div>
    </Authenticated_layout>
</template>
