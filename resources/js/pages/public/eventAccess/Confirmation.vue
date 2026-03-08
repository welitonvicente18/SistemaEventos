<script setup lang="ts">
import { CalendarIcon, LinkIcon, MapPinIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    event: Object,
    subscription: Object,
});
</script>

<template>
    <div class="bg-gray-900">
        <div class="mx-auto max-w-7xl py-10 sm:px-6 sm:py-5 lg:px-8">
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
                <div class="mx-auto text-center lg:mx-0 lg:py-22 lg:text-left">
                    <p class="mt-6 text-2xl text-pretty text-gray-300">✅ Inscrição confirmada!</p>
                    <div class="mt-10 gap-x-6 lg:justify-start">
                        <div class="mt-6 text-lg/8 text-pretty text-gray-300">
                            Olá <b>{{ props.subscription.name }}</b
                            >, sua inscrição foi realizada com sucesso!
                        </div>
                        <div class="mt-6 text-lg/8 text-pretty text-gray-300">DETALHES DO EVENTO:</div>
                        <div class="mt-2 text-lg/8 text-pretty text-gray-300">
                            {{ props.event.name }}
                        </div>
                        <div class="mt-2 inline-flex text-lg/8 text-pretty text-gray-300">
                            <CalendarIcon class="h-6 w-6 text-white" /> {{ $formatDate(props.event.date_start) }} até
                            {{ $formatDate(props.event.date_end) }}
                        </div>
                        <div class="mt-2">
                            <div class="inline-flex text-lg/8 text-pretty text-gray-300">
                                <MapPinIcon class="h-6 w-6 text-white" />{{ props.event.location }}
                            </div>
                        </div>
                        <div class="mt-6 text-lg/8 text-pretty text-gray-300">
                            SEU CÓDIGO DE ACESSO:
                            <br />
                            {{ props.subscription.ticket_code }}
                        </div>
                        <div class="mt-6 text-lg/8 text-pretty text-gray-300">
                            Enviamos um e-mail com todos os detalhes para {{ props.subscription.email }}
                        </div>
                        <div class="mt-6 text-lg/8 text-pretty text-gray-300">
                            <a
                                :href="`/inscricao/${props.event.site}`" target="_blank"
                                class="mt-5 flex w-100 items-center gap-2 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white
                                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <LinkIcon class="h-6 w-6 text-white" />
                                COMPARTILHAR
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-7xl lg:px-8">
            <div
                class="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring
                    after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:gap-x-20 lg:px-24 lg:pt-0"
            ></div>
        </div>
    </div>
</template>
