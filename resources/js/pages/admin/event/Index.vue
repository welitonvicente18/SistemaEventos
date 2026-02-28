<script setup lang="ts">
import Authenticated_layout from '@/pages/layouts/Authenticated_layout.vue';
import { PencilSquareIcon, XCircleIcon, CalendarDaysIcon } from '@heroicons/vue/24/solid';
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { toast } from 'vue-sonner';
import { useForm } from '@inertiajs/vue3';

const { events } = defineProps({
    events: Object,
});

const baseUrl = import.meta.env.VITE_APP_URL

const form = useForm({
    id: '',
});
function deletarEvent(id) {
    if (confirm('Tem certeza que deseja deletar este evento?')) {
        form.put(route('admin.event.destroy', id), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Excluído com sucesso!');
            },
            onError: (errors) => {
                for (const message of Object.values(errors)) {
                    toast.error('Erro ao excluir registro!', { description: message });
                }
            },
        });
    }
}
</script>

<template>
    <Authenticated_layout>
        <template #header>
            <header class="py-10">
                <div class="mx-auto flex max-w-7xl justify-between">
                    <div class="px-4 sm:px-6 lg:px-8">
                        <h1 class="text-3xl font-bold tracking-tight text-white">Listagem de Eventos</h1>
                    </div>
                    <div class="justify-items-end px-4 sm:px-6 lg:px-8">
                        <Link
                            :href="route('admin.event.create')"
                            class="flex items-center gap-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2
                                focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            <PlusCircleIcon class="h-6 w-6 text-white" />
                            Adicionar
                        </Link>
                    </div>
                </div>
            </header>
        </template>
        <div
            class="overflow-hidden rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6 dark:bg-gray-800 dark:shadow-none dark:outline
                dark:-outline-offset-1 dark:outline-white/10"
        >
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-900">
                    <tr>
                        <th class="w-4/12 px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            NOME
                        </th>
                        <th class="w-2/12 px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            DATAS
                        </th>
                        <th class="w-1/12 px-6 py-4 text-center text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            TIPO
                        </th>
                        <th class="w-2/12 px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            LOCAL
                        </th>
                        <th class="w-2/12 px-6 py-4 text-center text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            SITE
                        </th>
                        <th class="w-1/12 px-6 py-4 text-center text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                            AÇÃO
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                    <tr v-for="event in events" :key="event.id" class="transition hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            <div>
                                <div class="text-2xl">{{ event.name }}</div>
                                <div class="text-1xl mt-2 w-50 rounded-lg bg-slate-500 px-5 py-1">
                                    Inscrições: {{ event.total_subscriptions }} / {{ event.capacity }}
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            Início: {{ $formatDate(event.date_start) }}
                            <br />
                            Fim: {{ $formatDate(event.date_end) }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            {{ event.type_event.name }}
                            {{ event.type_event.value }}
                            {{ event.type_event.value }}
                            {{ event.type_event }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            {{ event.location }}
                        </td>
                        <td class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">
                            <a
                                :href="`${baseUrl}inscricao/${event.site}`"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md
                                    transition hover:bg-indigo-500"
                            >
                                Visitar site
                            </a>
                        </td>
                        <td class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-300">
                            <div class="flex items-center gap-3">
                                <Link
                                    :href="route('admin.event.show', event.id)"
                                    aria-label="Acessar Evento"
                                    title="Acessar Evento"
                                    class="justify-items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-400
                                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
                                >
                                    <CalendarDaysIcon class="size-6 text-white group-hover:text-white" /> Acessar
                                </Link>
                                <!--                                <Link @click="deletarEvent(event.id)" aria-label="Editar Usuário" title="Editar Usuário">-->
                                <!--                                    <XCircleIcon class="size-6 text-red-400 group-hover:text-white" />-->
                                <!--                                </Link>-->
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Authenticated_layout>
</template>
