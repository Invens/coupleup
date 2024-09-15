import { signIn } from 'next-auth/react';
import { useState } from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <button
          onClick={() => signIn('google')}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
