<script setup lang="ts">
import Authentication_layout from '@/pages/layouts/Authentication_layout.vue';
import { useForm } from '@inertiajs/vue3'; // agora funciona
import { toast } from 'vue-sonner';

defineOptions({layout: Authentication_layout })

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const handleSubmit = () => {
    form.post(route('admin.login.do'), {
        preserveScroll: true,
        onError: (errors) => {
            for(const message of Object.values(errors)){
                toast.error('Erro ao fazer login!', {description: message});
            }
        }
    });
};

</script>

<template>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm/6 font-medium text-gray-100">Login</label>
                    <div class="mt-2">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            v-model="form.email"
                            autocomplete="email"
                            placeholder="Digite seu login"
                            class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10
                                placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm/6 font-medium text-gray-100">Senha</label>
                    </div>
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
                                placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                    <div class="mt-2">
                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <input type="checkbox" id="remember" name="remember" v-model="form.remember" />
                                <label for="remember"> Lembra-me</label>
                            </div>
                            <div class="text-sm">
                                <Link :href="route('admin.password')" class="font-semibold text-indigo-400 hover:text-indigo-300">Esqueceu a senha?</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Logar
                    </button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm/6 text-gray-400">
                ainda não tem conta?
                <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Faça seu cadastro!</a>
            </p>
        </div>
</template>

<style scoped></style>
