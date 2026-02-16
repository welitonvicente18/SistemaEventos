<x-mail::message>
    # Nova Senha Gerada

    Olá **{{ $name }}**,

    Uma nova senha foi gerada para sua conta.

    🔐 Sua nova senha:
    **{{ $newPassword }}**

    Por motivos de segurança, recomendamos que você altere essa senha após realizar o login.

    Se você não solicitou essa alteração, entre em contato com o administrador imediatamente.

    Obrigado,<br>
    {{ config('app.name') }}
</x-mail::message>
