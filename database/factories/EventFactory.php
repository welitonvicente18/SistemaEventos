<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->domainName();
        return [
            'name' => $name,
            'user_id' => $this->faker->numberBetween(1, 10),
            'type_event' => $this->faker->numberBetween(1, 4),
            'date_start' => $this->faker->date(),
            'date_end' => $this->faker->date(),
            'location' => $this->faker->locale(),
            'site' => Str::slug($name),
            'description' => $this->faker->text(),
        ];
    }
}
