<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('type_event');
            $table->unsignedBigInteger('user_id');
            $table->date('date_start');
            $table->date('date_end');
            $table->string('location', 200)->nullable();
            $table->string('site', 250)->nullable();
            $table->string('description', 500)->nullable();
            $table->string('image', 500)->nullable();
            $table->integer('capacity')->nullable()->default(10);;
            $table->softDeletes();
            $table->timestamps();

            // Chave estrangeira para usuários
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
