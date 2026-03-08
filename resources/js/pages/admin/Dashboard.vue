<script setup lang="ts">
import Authenticated_layout from '@/pages/layouts/Authenticated_layout.vue';
</script>

<template>
    <Authenticated_layout>
        <template #header>
            <header class="py-10">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
                </div>
            </header>
        </template>
        <div class="rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6 dark:bg-gray-800 dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
            <p>Seja bem-vindo à plataforma de inscrição de eventos!</p>
            <p class="mt-3">Aqui você pode gerenciar todos os inscritos no seu evento de forma simples e rápida.</p>
        </div>
    </Authenticated_layout>
</template>
