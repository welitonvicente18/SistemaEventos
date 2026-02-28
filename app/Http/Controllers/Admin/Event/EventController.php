<?php

namespace App\Http\Controllers\Admin\Event;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = DB::table('events')
                 ->leftJoin('subscriptions', 'events.id', '=', 'subscriptions.event_id')
                 ->select('events.*',DB::raw('COUNT(subscriptions.id) as total_subscriptions'))
                 ->groupBy('events.id')
                 ->get();

        return Inertia::render('admin/event/Index', ['events' => $events]);
    }

    /**
     * Display a listing of the resource.
     */
    public function show($id)
    {
        $event = Event::findorFail($id);
        $imageEvent = $event->image ? asset('storage/' . $event->image) : null;

        // Consultar inscritos
        $subscriptions = Subscription::where('event_id', $id)->orderBy('name')->get();

        return Inertia::render('admin/event/Show',
            [
                'event' => $event,
                'imageEvent' => $imageEvent,
                'subscriptions' => $subscriptions
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/event/Form', ['event' => '']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Event $event)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'type_event' => 'required',
            'date_start' => 'date',
            'date_end' => 'date',
            'location' => 'nullable|string|max:200',
            'site' => 'nullable|string|max:250',
            'capacity' => 'nullable',
            'description' => 'nullable|string|max:500',
            'image' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
        ]);

        $validate['user_id'] = Auth::user()->id;

        if ($request->file('image')) {
            $fileName = preg_replace('/[^A-Za-z]/', '', $request->name) . '_' . date('Y-m-d_H:i:s') . '.' . $request->file('image')->getClientOriginalExtension();
            $validate['image'] = $request->file('image')->storeAs('/event/img', $fileName);
        }

        $event->create($validate);

        Inertia::flash('success', 'Evento Salvo com sucesso!');
        return redirect()->route('admin.event.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $event = Event::findorFail($id);
        $imageEvent = $event->image ? asset('storage/' . $event->image) : null;
        return Inertia::render('admin/event/Form', ['event' => $event, 'imageEvent' => $imageEvent]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $event = Event::findOrFail($id);

        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'type_event' => 'required',
            'date_start' => 'date',
            'date_end' => 'date',
            'location' => 'nullable|string|max:200',
            'site' => 'nullable|string|max:250',
            'capacity' => 'nullable',
            'description' => 'nullable|string|max:500',
            'image' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
        ]);

        if ($request->file('image')) {
            $fileName = preg_replace('/[^A-Za-z]/', '', $request->name) . '_' . date('Y-m-d_H:i:s') . '.' . $request->file('image')->getClientOriginalExtension();
            $validate['image'] = $request->file('image')->storeAs('/event/img', $fileName);
        }

        $event->update($validate);

        Inertia::flash('success', 'Evento Atualizado com Sucesso!');
        return redirect()->route('admin.event.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = Event::findOrFail($id);
        $user->destroy($id);
        return redirect()->route('admin.event.index');
    }
}
