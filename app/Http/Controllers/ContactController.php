<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Response;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query();

        if ($request->filled('date_from') && $request->filled('date_to')) {

            $query->whereBetween('created_at', [
                $request->date_from . ' 00:00:00',
                $request->date_to . ' 23:59:59'
            ]);
        }

        if ($request->filled('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->filled('province')) {
            $query->where('province', 'like', '%' . $request->province . '%');
        }

        if ($request->filled('city')) {
            $query->where('city', 'like', '%' . $request->city . '%');
        }

        $contacts = $query->orderBy('created_at', 'desc')->paginate(15);

        return Inertia::render('Contacts/Index', [
            'contacts' => $contacts,
            'filters' => $request->only(['date_from', 'date_to', 'name', 'province', 'city']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Contacts/Create');
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', 'regex:/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+/'],
            'province' => ['required', 'string', 'max:255', 'regex:/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+/'],
            'city' => ['required', 'string', 'max:255', 'regex:/[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+/'],
        ]);

        Contact::create($validated);

        return redirect()->route('contacts.index')->with('success', 'Contacto creado exitosamente.');
    }



    public function exportCsv(Request $request)
    {
        $query = Contact::query();

        if ($request->filled('date_from') && $request->filled('date_to')) {
            $query->whereBetween('created_at', [$request->date_from, $request->date_to]);
        }

        if ($request->filled('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }

        if ($request->filled('province')) {
            $query->where('province', $request->province);
        }

        if ($request->filled('city')) {
            $query->where('city', $request->city);
        }

        $contacts = $query->orderByDesc('created_at')->get();

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="contacts.csv"',
        ];

        $callback = function () use ($contacts) {
            $handle = fopen('php://output', 'w');
            fputcsv($handle, ['ID', 'Nombre', 'Provincia', 'Ciudad', 'Fecha']);

            foreach ($contacts as $contact) {
                fputcsv($handle, [
                    $contact->id,
                    $contact->name,
                    $contact->province,
                    $contact->city,
                    $contact->created_at,
                ]);
            }

            fclose($handle);
        };

        return Response::stream($callback, 200, $headers);
    }
}
