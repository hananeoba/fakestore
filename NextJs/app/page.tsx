import Image from 'next/image'
import { getServerSession } from 'next-auth';
import Products from './components/Products';
import HeroSection from './components/HeroSection';

const Home: React.FC =async ()=> {
  const session = await getServerSession();
  if (session) {
    console.log('Hello, world!');
    console.log(session);
  }
  return (
    <div className="container mx-auto p-12">
      <HeroSection />
      <Products />
    </div>
  )
}
export default Home;  
