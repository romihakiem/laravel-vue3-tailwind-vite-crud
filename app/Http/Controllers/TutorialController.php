<?php

namespace App\Http\Controllers;

use App\Models\Tutorial;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class TutorialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Tutorial::query()->orderBy('created_at', 'desc')->paginate(10, ['*'], 'current_page'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required',
                // 'published' => 'required|integer|min:0|max:1'
            ]);

            Tutorial::create($request->all());

            return response()->json([
                'message' => 'Successfully created'
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], $e->status);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Tutorial $tutorial)
    {
        return response()->json($tutorial);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tutorial $tutorial)
    {
        return response()->json($tutorial);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tutorial $tutorial)
    {
        try {
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required',
                // 'published' => 'required|integer|min:0|max:1'
            ]);

            $tutorial->title = $request->title;
            $tutorial->description = $request->description;
            $tutorial->published = $request->published;
            $tutorial->save();

            return response()->json([
                'message' => 'Successfully updated'
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => $e->getMessage(),
                'errors' => $e->errors()
            ], $e->status);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tutorial $tutorial)
    {
        $tutorial->delete();

        return response()->json([
            'message' => 'Successfully deleted'
        ]);
    }
}
