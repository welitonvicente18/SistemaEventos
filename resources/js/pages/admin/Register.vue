<script setup lang="ts">
import Authentication_layout from '@/pages/layouts/Authentication_layout.vue';
import { useForm } from '@inertiajs/vue3'; // agora funciona
import { toast } from 'vue-sonner';

defineOptions({ layout: Authentication_layout })

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const handleSubmit = () => {
    form.post(route('register'), {
        preserveScroll: true,
        onError: (errors) => {
            for (const message of Object.values(errors)) {
                toast.error('Erro ao fazer login!', { description: message });
            }
        }
    });
};

</script>

<template>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
                <label for="name" class="block text-sm/6 font-medium text-gray-100">Nome</label>
                <div class="mt-2">
                    <input
                           id="name"
                           type="name"
                           name="name"
                           required
                           v-model="form.name"
                           autocomplete="name"
                           placeholder="Digite seu nome"
                           class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10
                                placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                </div>
            </div>
            <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-100">E-mail</label>
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
                                placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                </div>
            </div>
            <div>
                <label for="password" class="block text-sm/6 font-medium text-gray-100">Senha</label>
                <div class="mt-2">
                    <input
                           id="password"
                           type="password"
                           name="password"
                           v-model="form.password"
                           required
                           autocomplete="current-password"
                           placeholder="Digite sua senha"
                           class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10
                                placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                </div>
            </div>
            <div>
                <label for="password_confirmation" class="block text-sm/6 font-medium text-gray-100">Confirmar Senha</label>
                <div class="mt-2">
                    <input
                           id="password_confirmation"
                           type="password"
                           name="password_confirmation"
                           v-model="form.password_confirmation"
                           required
                           autocomplete="current-password"
                           placeholder="Confirme sua senha"
                           class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10
                                placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                </div>
            </div>
            <div>
                <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    Cadastrar
                </button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm/6 text-gray-400">
            <Link :href="route('login')" class="font-semibold text-indigo-400 hover:text-indigo-300">voltar ao login</Link>
        </p>
    </div>
</template>

<style scoped></style>
