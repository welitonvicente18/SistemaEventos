<script setup lang="ts">
import Authenticated_layout from '@/pages/layouts/Authenticated_layout.vue';
import { useForm } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';

const { event } = defineProps({
    event: Object,
    imageEvent: String,
});

const form = useForm({
    name: event.name ?? '',
    type_event: event.type_event ?? '',
    date_start: event.date_start ?? '',
    date_end: event.date_end ?? '',
    location: event.location ?? '',
    site: event.site ?? '',
    capacity: event.capacity ?? '',
    image: event.image ?? '',
    description: event.description ?? '',
});

const handleSubmit = () => {
    if (event.id) {
        form.put(route('admin.event.update', event.id), {
            preserveScroll: true,
            onError: (errors) => {
                for (const message of Object.values(errors)) {
                    toast.error('Erro atualizar os dados!', { description: message });
                }
            },
        });
    } else {
        form.post(route('admin.event.store'), {
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
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-white">{{ event.id ? 'Atualizar Evento' : 'Cadastro de Evento' }}</h1>
                </div>
            </header>
        </template>
        <div
            class="overflow-hidden rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6 dark:bg-gray-800 dark:shadow-none dark:outline
                dark:-outline-offset-1 dark:outline-white/10"
        >
            <form @submit.prevent="handleSubmit">
                <div class="space-y-12">
                    <div class="border-b border-white/10 pb-12">
                        <div class="border-b border-white/10 pb-5">
                            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <label for="first-name" class="block text-sm/6 font-medium text-white">Nome do Evento</label>
                                    <div class="mt-2">
                                        <input
                                            id="first-name"
                                            type="text"
                                            name="first-name"
                                            v-model="form.name"
                                            required
                                            autocomplete="given-name"
                                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="type_event" class="block text-sm/6 font-medium text-white">Tipo de Evento</label>
                                    <div class="mt-2">
                                        <select name="type_event" v-model="form.type_event" required class="block w-full rounded-md bg-white/5 px-3 py-2.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="data-inicio" class="block text-sm/6 font-medium text-white">Data de Início</label>
                                    <div class="mt-2">
                                        <input
                                            id="data-inicio"
                                            type="date"
                                            name="date_start"
                                            required
                                            v-model="form.date_start"
                                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="data-encerramento" class="block text-sm/6 font-medium text-white">Data Encerramento</label>
                                    <div class="mt-2">
                                        <input
                                            id="data-encerramento"
                                            type="date"
                                            name="date_end"
                                            required
                                            v-model="form.date_end"
                                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="location" class="block text-sm/6 font-medium text-white">Local</label>
                                    <div class="mt-2">
                                        <input
                                            id="location"
                                            type="text"
                                            name="location"
                                            v-model="form.location"
                                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="site" class="block text-sm/6 font-medium text-white">Site</label>
                                    <div class="mt-2">
                                        <input
                                            id="site"
                                            type="text"
                                            name="site"
                                            v-model="form.site"
                                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="capacity" class="block text-sm/6 font-medium text-white">Capacidade de Inscrições</label>
                                    <div class="mt-2">
                                        <input
                                            id="capacity"
                                            type="number"
                                            min="1"
                                            name="capacity"
                                            v-model="form.capacity"
                                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div class="gap-4 sm:col-span-6">
                                    <label for="description" class="block text-sm/6 font-medium text-white">Descrição do Evento</label>
                                    <div class="mt-2">
                                        <textarea
                                            id="description"
                                            type="text"
                                            name="description"
                                            v-model="form.description"
                                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                focus:outline-indigo-500 sm:text-sm/6"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="mt-5 justify-items-center gap-4 sm:col-span-6">
                                    <div>
                                        <img v-if="imageEvent" :src="imageEvent" class="h-65 w-full rounded-3 object-cover" alt="image do Evento" />
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                        </svg>
                                    </div>
                                    <div class="justify-items-center">
                                        <input
                                            id="image"
                                            type="file"
                                            name="image"
                                            @change="handleFileChange"
                                            accept=".jpg,.jpeg,.png"
                                            class="mt-3 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
                                        />
                                        <p class="mt-3 text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <Link :href="route('admin.event.index')">
                        <button
                            type="button"
                            class="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2
                                focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Cancelar
                        </button>
                    </Link>
                    <button
                        type="submit"
                        class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        {{ event.id ? 'Atualizar' : 'Cadastrar'}}
                    </button>
                </div>
            </form>
        </div>
    </Authenticated_layout>
</template>
