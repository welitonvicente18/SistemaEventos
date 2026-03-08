<?php

namespace App\Jobs;

use App\Mail\CreateSubscriptiomMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class CreateSubscriptionMail implements ShouldQueue
{
    use Queueable;

    public $tries = 3;
    public $backoff = 30;

    /**
     * Create a new job instance.
     */
    public function __construct(public array $user, public $event)
    {
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to($this->user['email'])->send(new CreateSubscriptiomMail($this->user['name'], $this->event));
    }

    public function failed(\Throwable $exception): void
    {
        Mail::raw('Erro ao enviar o e-mail inscrição para o participante do evento.', function ($message) {
            $message->to('weliton@wcode.com')
                ->subject('Erro no Job');
        });
    }
}