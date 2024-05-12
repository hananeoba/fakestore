"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const  LoginForm: React.FC = ()=> {
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
        toast.success('Login Successful!');
        router.push('/');
      } else if (response.error === 'CredentialsSignin') {
        toast.error('Login failed');
        setError('Invalid username or password');
      }
    } catch (error) {
      toast.error('Login failed');
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Welcome to fakeStore</h1>
        <h2 className="text-lg font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="border border-gray-300 px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:border-primary"
            type="text"
            placeholder="User Name"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="border border-gray-300 px-3 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:border-primary"
            type="password"
            placeholder="Password"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-secondary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
export default LoginForm;