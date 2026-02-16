<script setup lang="ts">
import Toaster from '@/pages/admin/components/toast/toaster.vue';
</script>

<template>
    <Toaster />
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="mx-auto h-10 w-auto" />
            <h2 class="mt-10 text-center text-3xl/9 font-bold tracking-tight text-white">Sistema de Eventos</h2>
            <h2 class="text-1xl/9 text-gray-500 mt-2 text-center tracking-tight">Crie seu evento e gerencie os seus convidados</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <!--Conteúdo-->
            <slot/>
        </div>
    </div>
</template>
