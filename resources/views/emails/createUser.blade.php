<x-mail::message>
    # 🎉 Cadastro Realizado!

    Olá {{ $name ?? 'Participante' }},

    Seu cadastro foi realizado com sucesso! Estamos muito felizes em ter você conosco 💙

    Clique no botão abaixo para confirmar seu email e acessar sua conta:
    <x-mail::button url="http://localhost/confirm-email/{{ $userId }}">
        Confirmar Email
    </x-mail::button>

    {{ config('app.name') }}
</x-mail::message>