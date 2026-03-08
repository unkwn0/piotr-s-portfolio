import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import About from '@/components/About';
import PullQuote from '@/components/PullQuote';
import CaseFiles from '@/components/CaseFiles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <BentoGrid />
        <About />
        <PullQuote />
        <CaseFiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
