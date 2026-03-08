<script setup lang="ts">
import { Toaster } from 'vue-sonner';
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <Toaster
        :closeButton="true"
        :closeButtonPosition="'top-right'"
        :expand="true"
        :visibleToasts="5"
        :position="'top-right'"
        :toastOptions="{
            unstyled: true,
            classes: {
                toast: 'w-full max-w-sm rounded-lg bg-white bg-white shadow-lg outline-1 outline-black/5 dark:bg-gray-800 dark:-outline-offset-1 dark:outline-white/10 p-4 flex items-start',
                icon: 'order-1 size-6 text-gray-500 dark:text-white',
                content: 'order-2 ml-3 w-0 flex-1 pt-0.5',
                title: 'text-sm font-medium text-gray-900 dark:text-white',
                description: 'mt-1 text-sm text-gray-500 dark:text-gray-400 whitespace-pre-wrap',
                closeButton:
                    'order-3 ml-4 shrink-0 inline-flex rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-white dark:focus:outline-indigo-500',
                actionButton: 'bg-zinc-400',
                cancelButton: 'bg-orange-400',
            },
        }"
    >
        <template #info-icon>
            <InformationCircleIcon class="size-6 text-blue-500" />
        </template>
        <template #success-icon>
            <CheckCircleIcon class="size-6 text-green-500" />
        </template>
        <template #error-icon>
            <XCircleIcon class="size-6 text-red-500" />
        </template>
        <template #warning-icon>
            <ExclamationCircleIcon class="size-6 text-yellow-500" />
        </template>
        <template #close-icon>
            <XMarkIcon class="size-5" />
        </template>
    </Toaster>
</template>

<style scoped></style>
