<?php

namespace App\Http\Controllers\Admin\Subscription;

use App\Http\Controllers\Controller;
use App\Mail\CreateSubscriptiomMail;
use App\Models\Event;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;

class SubscriptionController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/subscription/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Subscription $subscription)
    {
        $event = Event::where('id', $request->event_id)->firstOrFail();

        // Verificar capacidade
        if ($this->EventIsFull($request->event_id)) {
//            return redirect()->back()->withErrors(['error', 'Este evento atingiu sua capacidade máxima']);
        }

        $validated = $request->validate([
            'event_id' => 'required|integer',
            'name' => 'required',
            'email' => 'required|email|unique:subscriptions',
            'phone' => 'nullable|string|max:20',
        ]);

        $existing = Subscription::where('email', $validated['email'])->first();

        // Verificar se já está inscrito
        if ($existing) {
            return redirect()->back()->withErrors(['error', 'você já esta cadastrado neste evento']);
        }

        $subscription->event_id = $validated['event_id'];
        $subscription->name = $validated['name'];
        $subscription->email = $validated['email'];
        $subscription->phone = $validated['phone'];
        $subscription->ticket_code = Str::random(8);
        $idSubscription = $subscription->save();

        // Enviar email de confirmação
        Mail::to($validated['email'])->send(new CreateSubscriptiomMail($validated['name'], $event));

        return redirect()->route('subscription.confirmation', $idSubscription)->with('success', 'Cadastro realizado com sucesso');
    }

    public function confirmation($id)
    {
        $subscription = Subscription::findorFail($id);
        $event = Event::findorFail($subscription->event_id);

        return Inertia::render('public/eventAccess/Confirmation', ['subscription' => $subscription, 'event' => $event]);
    }

    public function cancel(string $id, Subscription $subscription)
    {
        $subscription->id = $id;
        $subscription->status = 2;
        $subscription->update();

        $subscription = Subscription::findorFail($id);

        return Inertia::render('public/eventAccess/Cancel', ['subscription' => $subscription]);
    }

    protected function EventIsFull($idEvento)
    {
        $event = Event::where('id', $idEvento)->firstOrFail();
        $subscription = Subscription::where('event_id', $idEvento);

        if ($subscription->count() >= $event->capacity) {
            return true;
        }
        return false;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $subscription = Subscription::findorFail($id);

        return Inertia::render('admin/subscription/Form', ['subscription' => $subscription]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
