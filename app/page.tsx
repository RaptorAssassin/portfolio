import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { NavBar } from '@/components/nav-bar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-full w-full">
      <NavBar />
      <Hero></Hero>
      <About></About>
    </main>
  );
}
