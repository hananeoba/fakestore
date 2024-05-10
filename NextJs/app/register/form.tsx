"use client"
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { NextResponse } from 'next/server';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    lat: '',
    long: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/login');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Register</h1>
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            className="border border-gray-300 px-3 py-2 rounded-md"
            type="email"
            placeholder="Email"
            required
          />
          <input
            value={formData.username}
            onChange={handleChange}
            name="username"
            className="border border-gray-300 px-3 py-2 rounded-md"
            type="text"
            placeholder="Username"
            required
          />
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            className="border border-gray-300 px-3 py-2 rounded-md"
            type="password"
            placeholder="Password"
            required
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
              className="border border-gray-300 px-3 py-2 rounded-md "
              type="text"
              placeholder="First Name"
              required
            />
            <input
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              className="border border-gray-300 px-3 py-2 rounded-md "
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              value={formData.city}
              onChange={handleChange}
              name="city"
              className="border border-gray-300 px-3 py-2 rounded-md flex-grow"
              type="text"
              placeholder="City"
              required
            />
            <input
              value={formData.street}
              onChange={handleChange}
              name="street"
              className="border border-gray-300 px-3 py-2 rounded-md flex-grow"
              type="text"
              placeholder="Street"
              required
            />
            
          </div>
          <div className="grid grid-cols-2 gap-2">
          <input
              value={formData.number}
              onChange={handleChange}
              name="number"
              className="border border-gray-300 px-3 py-2 rounded-md flex-grow"
              type="text"
              placeholder="Number"
              required
            />
            <input
              value={formData.zipcode}
              onChange={handleChange}
              name="zipcode"
              className="border border-gray-300 px-3 py-2 rounded-md flex-grow"
              type="text"
              placeholder="Zipcode"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            
            <input
              value={formData.lat}
              onChange={handleChange}
              name="lat"
              className="border border-gray-300 px-3 py-2 rounded-md flex-grow"
              type="text"
              placeholder="Latitude"
              required
            />
            <input
              value={formData.long}
              onChange={handleChange}
              name="long"
              className="border border-gray-300 px-3 py-2 rounded-md flex-grow"
              type="text"
              placeholder="Longitude"
              required
            />
          </div>
          <input
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            className="border border-gray-300 px-3 py-2 rounded-md"
            type="tel"
            placeholder="Phone"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>

        </form>
        <p className="mt-4 text-gray-600 text-center">
        Already have an account? <a href="/login" className="text-blue-500">Login</a>
      </p>
      </div>
    </div>
  );
}
