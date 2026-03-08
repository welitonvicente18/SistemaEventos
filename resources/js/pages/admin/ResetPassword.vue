<script setup lang="ts">
import Authentication_layout from '@/pages/layouts/Authentication_layout.vue';
import { useForm } from '@inertiajs/vue3';
import { toast } from 'vue-sonner';

defineOptions({layout: Authentication_layout })

const form = useForm({
    email: '',
});

const handleSubmit = () => {
    form.post(route('password.reset'), {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Email enviado com sucesso!')
        },
        onError: (errors) => {
            for(const message of Object.values(errors)){
                toast.error('Error ao verificar o e-mail!', {description: message});
            }
        }
    });
};
</script>

<template>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm/6 font-medium text-gray-100">E-mail de Recuperação</label>
                    <div class="mt-2">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            v-model="form.email"
                            autocomplete="email"
                            placeholder="Digite seu e-mail"
                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10
                                placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Enviar nova senha
                    </button>
                </div>
            </form>
            <p class="mt-10 text-center text-sm/6 text-gray-400">
                <Link :href="route('login')">
                    Voltar ao login
                </Link>
            </p>
        </div>
</template>