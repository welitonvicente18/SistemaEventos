<script setup lang="ts">
import Toaster from '@/pages/components/toast/toaster.vue';
import { toast } from 'vue-sonner';
import { router, useForm } from '@inertiajs/vue3';
import { MapPinIcon, CalendarIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    event: Object,
    imageEvent: String,
});

const form = useForm({
    event_id: props.event.id,
    name: '',
    email: '',
    phone: '',
    autorizo: '',
});

const handleSubmit = () => {
    form.post(route('eventSubscription.store'), {
        preserveScroll: true,
        onError: (errors) => {
            for (const message of Object.values(errors)) {
                toast.error('Erro criar o evento!', { description: message });
            }
        },
    });
};

router.on('flash', (event) => {
    if (event.detail.flash.success) {
        toast.success(event.detail.flash.success);
    }
});
</script>

<template>
    <Toaster />
    <div class="bg-gray-900">
        <div class="mx-auto max-w-7xl py-5 sm:px-6 sm:py-5 lg:px-8">
            <div
                class="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring
                    after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
            >
                <svg
                    viewBox="0 0 1024 1024"
                    aria-hidden="true"
                    class="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)]
                        sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                >
                    <circle r="512" cx="512" cy="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stop-color="#7775D6" />
                            <stop offset="1" stop-color="#E935C1" />
                        </radialGradient>
                    </defs>
                </svg>
                <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-22 lg:text-left">
                    <h2 class="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">{{ props.event.name }}</h2>
                    <p class="mt-6 text-lg/8 text-pretty text-gray-300">{{ props.event.description }}</p>
                    <div class="mt-10 gap-x-6 lg:justify-start">
                        <p class="mt-6 inline-flex text-lg/8 text-pretty text-gray-300">
                            <CalendarIcon class="h-6 w-6 text-white" />{{ $formatDate(props.event.date_start) }} até
                            {{ $formatDate(props.event.date_end) }}
                        </p>
                        <div class="mt-6 text-lg/8 text-pretty text-gray-300">
                            <div class="inline-flex">
                                <MapPinIcon class="h-6 w-6 text-white" />
                                {{ props.event.location }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative mt-16 h-80 lg:mt-8">
                    <img
                        width="1824"
                        height="1080"
                        :src="props.imageEvent"
                        alt="Imagem do Evento"
                        class="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                    />

                </div>
            </div>
        </div>
        <div class="mx-auto max-w-7xl lg:px-8">
            <div
                class="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring
                    after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:gap-x-20 lg:px-24 lg:pt-0"
            >
                <div class="mx-auto text-center lg:mx-0 lg:py-8 lg:text-left">
                    <form @submit.prevent="handleSubmit">
                        <div class="space-y-12">
                            <div class="pb-5">
                                <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-sm/6 font-medium text-white">Nome</label>
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
                                    <div class="sm:col-span-3"></div>
                                    <div class="sm:col-span-3">
                                        <label for="data-encerramento" class="block text-sm/6 font-medium text-white">E-mail</label>
                                        <div class="mt-2">
                                            <input
                                                id="data-encerramento"
                                                type="email"
                                                name="email"
                                                required
                                                v-model="form.email"
                                                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                    outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                    focus:outline-indigo-500 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                    <div class="sm:col-span-3">
                                        <label for="phone" class="block text-sm/6 font-medium text-white">Telefone</label>
                                        <div class="mt-2">
                                            <input
                                                id="phone"
                                                type="text"
                                                name="phone"
                                                v-model="form.phone"
                                                v-mask="'(##) #####-####'"
                                                class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1
                                                    outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2
                                                    focus:outline-indigo-500 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center justify-center gap-x-6">
                            <input type="checkbox" id="autorizo" name="autorizo" v-model="form.autorizo" required />
                            <label for="autorizo">
                                Declaro que li e concordo com a Política de Privacidade e autorizo o uso e armazenamento dos meus dados pessoais para
                                realização da inscrição e envio de informações relacionadas ao evento.
                            </label>
                        </div>
                        <div class="mt-6 flex items-center justify-center gap-x-6">
                            <button
                                type="submit"
                                class="w-100 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2
                                    focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            >
                                Inscrever-se
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
