import Image from 'next/image'
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    console.log('Hello, world!');
    console.log(session);
  }
  return (
    <div>
      <h1>Next.js + NextAuth.js</h1>
    </div>
  )
}
