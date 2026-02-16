<script setup lang="ts">
import Authenticated_layout from '@/pages/admin/layouts/Authenticated_layout.vue';
import { PencilSquareIcon, XCircleIcon } from '@heroicons/vue/24/solid';
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { toast } from 'vue-sonner';
import { useForm } from '@inertiajs/vue3';

const { users } = defineProps({
    users: Object,
})

const form = useForm({
    id: '',
});
function deletarUser(id){
    if(confirm('Tem certeza que deseja deletar este usuário?')) {
        form.put(route('admin.users.destroy', id), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Excluído com sucesso!')
            },
            onError: (errors) => {
                for(const message of Object.values(errors)){
                    toast.error('Erro ao excluir registro!', {description: message});
                }
            }
        });
    }
// :href="route('admin.users.destroy', user.id)"
}
</script>

<template>
    <Authenticated_layout>
        <template #header>
            <header class="py-10">
                <div class="flex justify-between">
                    <div class="mx-auto max-w-7xl">
                        <h1 class="text-3xl font-bold tracking-tight text-white">Listagem de Usuário</h1>
                    </div>
                    <div class="mx-auto max-w-7xl justify-items-end">
                        <Link :href="route('admin.users.create')" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex items-center gap-2">
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
                        <th class="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">NOME</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">E-MAIL</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">TELEFONE</th>
                        <th class="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">AÇÃO</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                    <tr v-for="user in users" :key="user.id" class="transition hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {{ user.name }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            {{ user.email }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            {{ user.fone }}
                        </td>
                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                            <div class="flex items-center gap-3">
                                <Link :href="route('admin.users.edit', user.id)" aria-label="Editar Usuário" title="Editar Usuário">
                                    <PencilSquareIcon class="size-6 text-gray-400 group-hover:text-white" />
                                </Link>
                                <Link @click="deletarUser(user.id)" aria-label="Editar Usuário" title="Editar Usuário">
                                    <XCircleIcon class="size-6 text-red-400 group-hover:text-white" />
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Authenticated_layout>
</template>
