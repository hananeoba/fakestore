"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 
import { FormEvent, useState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });

      if (!response?.error) {
        router.push('/');
        router.reload();
      }
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Login</h1>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="border border-gray-300 px-3 py-2 rounded-md"
            type="text"
            placeholder="Username"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="border border-gray-300 px-3 py-2 rounded-md"
            type="password"
            placeholder="Password"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
