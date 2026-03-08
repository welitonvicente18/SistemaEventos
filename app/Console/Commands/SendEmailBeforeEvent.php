<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SendEmailBeforeEvent extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-email-before-event';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Envia um email para os usuários 1 dia antes do evento acontecer.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Log::debug("teste de execução");
    }
}
