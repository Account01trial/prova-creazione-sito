import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
