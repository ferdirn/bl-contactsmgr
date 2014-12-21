<?php

class ContactsTableSeeder extends Seeder {

	public function run()
	{

    DB::table('contacts')->delete();

    $contacts = array(
      [
        'first_name' => 'John',
        'last_name' => 'Doe',
        'email_address' => 'john_doe@example.com',
        'description' => 'my friend'
      ],
      [
        'first_name' => 'Jane',
        'last_name' => 'Doe',
        'email_address' => 'jane_doe@example.com',
        'description' => 'my friend\'s wife'
      ],
      [
        'first_name' => 'Jeffrey',
        'last_name' => 'Way',
        'email_address' => 'jeffrey_way@envato.com',
        'description' => 'my mentor'
      ]
    );

    foreach( $contacts as $c ) {
      Contact::create($c);
    }

	}

}