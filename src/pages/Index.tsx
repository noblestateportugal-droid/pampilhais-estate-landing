import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyHighlights from '@/components/PropertyHighlights';
import PropertyDescription from '@/components/PropertyDescription';
import Gallery from '@/components/Gallery';
import VantageView from '@/components/VantageView';
import MapSection from '@/components/MapSection';
import InvestmentSnapshot from '@/components/InvestmentSnapshot';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const Index = () => {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <PropertyHighlights />
        <PropertyDescription />
        <Gallery />
        <VantageView />
        <MapSection />
        <InvestmentSnapshot />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
