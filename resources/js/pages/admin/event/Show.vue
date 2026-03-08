<script setup lang="ts">
import Authenticated_layout from '@/pages/layouts/Authenticated_layout.vue';
import {
    XCircleIcon,
    PencilSquareIcon,
    HandThumbUpIcon,
    ArrowLongLeftIcon,
    MapPinIcon,
    CalendarIcon, LinkIcon,
} from '@heroicons/vue/24/outline';
import { useForm } from '@inertiajs/inertia-vue3';
import { toast } from 'vue-sonner';

const props = defineProps({
    event: Object,
    subscriptions: Object,
});

const form = useForm({
    id: '',
})

const subscriptionLength = props.subscriptions.length;
const CapacitysubscriptionLength = props.event.capacity - props.subscriptions.length;
const CapacitysubscriptionPercent = ((props.subscriptions.length / props.event.capacity) * 100).toFixed(2);

function deleteSubscription(id) {
    if (confirm('Tem certeza que deseja deletar este evento?')) {
        form.put(route('admin.subscription.destroy', id), {
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
                    <div class="justify-items-start px-4 sm:px-6 lg:px-8 ">
                        <h1 class="text-3xl font-bold tracking-tight text-white">PAINEL DE GESTÃO DO EVENTO</h1>
                        <Link :href="route('admin.event.index')">
                        <p class="text-zinc-500 flex mt-2 items-center gap-2">
                            <ArrowLongLeftIcon class="h-5 w-5" /> Voltar
                        </p>
                        </Link>
                    </div>
                    <div class="justify-items-end px-4 sm:px-6 lg:px-8">
                        <Link
                              :href="route('admin.event.edit', event.id)"
                              class="flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2
                                focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <PencilSquareIcon class="h-6 w-6 text-white" />
                        Editar Evento
                        </Link>
                    </div>
                </div>
            </header>
        </template>
        <div class="overflow-hidden rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6 dark:bg-gray-800 dark:shadow-none dark:outline
                dark:-outline-offset-1 dark:outline-white/10">
            <div class="mb-2 space-y-12">
                <div class="relative isolate overflow-hidden bg-gray-800 px-6 justify-center
                        sm:px-5 lg:flex lg:gap-x-30 lg:pt-0">
                    <svg viewBox="0 0 1024 1024" aria-hidden="true" class="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)]
                            sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
                        <circle r="512" cx="512" cy="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stop-color="#7775D6" />
                                <stop offset="1" stop-color="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-5 lg:text-left">
                        <h2 class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-3xl">{{ props.event.name }}</h2>
                        <p class="mt-6 text-lg/8 text-pretty text-gray-300">{{ props.event.description }}</p>
                        <div class="mt-10 gap-x-6 lg:justify-start">
                            <p class="inline-flex text-lg/8 text-pretty text-gray-300">
                                <CalendarIcon class="h-6 w-6 text-white" />{{ $formatDate(props.event.date_start) }} até
                                {{ $formatDate(props.event.date_end) }}
                            </p>
                            <div class="mt-1 text-lg/8 text-pretty text-gray-300">
                                <div class="inline-flex">
                                    <MapPinIcon class="h-6 w-6 text-white" />
                                    {{ props.event.location }}
                                </div>
                            </div>
                        </div>
                        <a :href="`/inscricao/${props.event.site}`" target="_blank" class="mt-5 flex items-center gap-2 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white
                                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <LinkIcon class="h-6 w-6 text-white" />
                            COMPARTILHAR
                        </a>
                    </div>
                    <div class="relative mt-16 h-80 lg:mt-8">
                        <img width="1824" height="1080" :src="'/storage/' + props.event.image" alt="Imagem do Evento" class="relative w-full h-full overflow-hidden rounded-md" />
                    </div>
                </div>
            </div>
            <div class="space-y-12">
                <div class="">
                    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-6">
                            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="p-5 text-center sm:col-span-3">
                                    <div class="text-1xl mt-2 rounded-md bg-gray-600 p-4">
                                        {{ subscriptionLength }} Inscritos
                                    </div>
                                </div>
                                <div class="p-5 text-center sm:col-span-3">
                                    <div class="text-1xl mt-2 rounded-md bg-gray-600 p-4">
                                        {{ CapacitysubscriptionPercent }}% - {{ CapacitysubscriptionLength }} vagas
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 min-w-full">
                        <div class="mb-2 text-left">
                            <h1 class="text-2xl">INSCRITOS NESTE EVENTO</h1>
                        </div>
                        <table class="mt-3 min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th class="w-4/12 px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase
                                            dark:text-gray-400">
                                        NOME
                                    </th>
                                    <th class="px-6 py-4 text-center text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                        STATUS
                                    </th>
                                    <th class="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                        E-MAIL
                                    </th>
                                    <th class="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                        TELEFONE
                                    </th>
                                    <th class="w-1/12 px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase
                                            dark:text-gray-400">
                                        AÇÃO
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                <tr v-for="subscription in props.subscriptions" :key="subscription.id" class="transition hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        {{ subscription.name }}
                                    </td>
                                    <td class="px-6 py-4 text-center text-sm font-medium text-gray-900 dark:text-white">
                                        <span class="inline-flex rounded-lg bg-green-600 px-2 py-1 text-white">
                                            <HandThumbUpIcon class="h-4 w-4" /> Confirmado
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                                        {{ subscription.email }}
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                        {{ subscription.phone }}
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                        <div class="flex items-center gap-3">
                                            <Link :href="route('admin.subscription.edit', subscription.id)" aria-label="Editar Inscrito" title="Editar Inscrito" class="justify-items-center rounded-md bg-indigo-600 px-1 py-1 text-sm font-semibold text-white
                                                    hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2
                                                    focus-visible:outline-indigo-300">
                                            <PencilSquareIcon class="size-7 text-white group-hover:text-white" />
                                            </Link>
                                            <Link @click="deleteSubscription(subscription.id)" aria-label="Excluir Inscrito" title="Excluir Inscrito" class="justify-items-center rounded-md bg-red-500 px-1 py-1 text-sm font-semibold text-white
                                                    hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2
                                                    focus-visible:outline-red-300">
                                            <XCircleIcon class="size-7 text-white group-hover:text-white" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Authenticated_layout>
</template>
