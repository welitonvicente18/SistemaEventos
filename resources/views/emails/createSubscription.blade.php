<x-mail::message>
    # 🎉 Inscrição Confirmada!

    Olá {{ $name ?? 'Participante' }},

    Sua participação foi confirmada com sucesso! Estamos muito felizes em ter você conosco 💙

    📌 Detalhes do Evento

    # Evento: {{ $event->name }}
    Local: {{ $event->location ?? 'A definir' }}
    Data: {{ $event->date_start ?? 'Data início' }} até {{ $event->date_end ?? 'Data fim' }}

    SEU CÓDIGO:

    Se tiver qualquer dúvida ou precisar de ajuda, nossa equipe está à disposição.

    <x-mail::button url="{{$event->site}}">
        Ver Detalhes do Evento
    </x-mail::button>

    ⚠️ Se precisar cancelar:
    <x-mail::button url="{{$event->site}}">
        CANCELAR INSCRIÇÃO
    </x-mail::button>

    Até breve,<br>
    {{ config('app.name') }}
</x-mail::message>
