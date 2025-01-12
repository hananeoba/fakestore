import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const response = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'success' });
    } else {
      return NextResponse.json({ message: 'error' }, { status: response.status });
    }
  } catch (e) {
    console.error('Registration error:', e);
    return NextResponse.json({ message: 'error' });
  }
}
