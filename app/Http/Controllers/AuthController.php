<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
        /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'signup']]); 
    }

    public function signup(Request $request) {
      $data = $request->validate([
        'name' => 'required',
        'email' => 'required|unique:users',
        'password' => 'required|min:6|confirmed',
      ]);

      User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]); 

      return $this->login($request, 'User created', 201, );
    }

    /** 
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request, $message = 'Login successful', $status = 200 )
    {

        $validData = $request->validate([
          'email' => 'required',
          'password' => 'required'
        ]);

        $credentials = request(['email', 'password']);
        
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Wrong Credentials'], 401);
        }

        return $this->respondWithToken($token, $message, $status);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $message = '', $status = 200)
    {
      return response()->json([
        'message' => $message,
        'access_token' => $token,
        'token_type' => 'bearer',
        'user' => auth()->user(),
        'expires_in' => auth()->factory()->getTTL() * 60
      ], $status);
    }
}