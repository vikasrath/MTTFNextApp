"use client"
import Login from "@/components/login/loginForm/login";
import Signup from "@/components/login/SignupForm/Signup";
import { useState } from "react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 w-full">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>

        {isSignUp ? <Signup/> : <Login />}

        <p className="text-sm text-center text-gray-600 mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 font-medium ml-1 hover:underline">
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}