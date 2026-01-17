import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Poster from '@/components/Poster';
import Policies from '@/components/Policies';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Team />
      <Poster />
      <Policies />
      <Contact />
    </main>
  );
}
