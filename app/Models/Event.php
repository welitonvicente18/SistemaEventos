<?php

namespace App\Models;

use App\Enum\TypeEvent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'name',
        'user_id',
        'type_event',
        'date_start',
        'date_end',
        'location',
        'site',
        'capacity',
        'description',
        'image',
    ];

    protected $casts = [
        'type_event' => TypeEvent::class,
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }
}
