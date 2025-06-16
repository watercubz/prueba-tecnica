<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ContactFactory extends Factory
{
    protected $model = \App\Models\Contact::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'province' => $this->faker->state(),
            'city' => $this->faker->city(),
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'updated_at' => now(),
        ];
    }
}
