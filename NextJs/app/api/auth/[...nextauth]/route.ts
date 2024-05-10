import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signIn } from 'next-auth/react';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });

          if (response.ok) {
            const data = await response.json();
            return data;
          } else {
            console.error('Login failed with status:', response.status);
            return null;
          }
        } catch (error) {
          console.error('Login error:', error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
