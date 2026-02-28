<?php

namespace App\Http\Controllers\Public\EventAcess;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventAcessController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke($site = null)
    {
        $event = Event::where('site', $site)->firstOrFail();

        $imageEvent = $event->image ? asset('storage/' . $event->image) : null;

        return Inertia::render('public/eventAccess/Form', ['event' => $event, 'imageEvent' => $imageEvent]);

    }

}
