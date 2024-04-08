<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // Define fillable fields if needed (for mass assignment protection)
    // protected $fillable = ['name', 'price'];
}

// Usage in your controller or another class
$product = Product::create([
    'name' => 'Awesome Product',
    'price' => 100.00,
]);
