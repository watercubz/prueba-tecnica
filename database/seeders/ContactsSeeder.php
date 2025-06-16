<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactsSeeder extends Seeder
{
    public function run()
    {
        Contact::factory()->count(50)->create();
    }
}
