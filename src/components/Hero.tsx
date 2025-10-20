import { Button } from '@/components/ui/button';
import { Download, Loader2, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/hero-estate.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Poster and Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Loading Spinner */}
        {!videoLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/20">
            <Loader2 className="h-12 w-12 text-white animate-spin" />
          </div>
        )}
        
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImage}
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover"
        >
          <source src="/Pampilhais_Hero_Video.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img
            src={heroImage}
            alt="Aerial view of Pampilhais Estate in Alentejo, Portugal"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white fade-in">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-balance leading-tight">
          {t('hero.title')}
          <br />
          <span className="text-primary">{t('hero.subtitle')}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-white/90 max-w-3xl mx-auto">
          {t('hero.description')}
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          onClick={() => {
            window.open('/Brochure_Pampilhais.pdf', '_blank');
          }}
        >
          <Download className="mr-2 h-5 w-5" />
          {t('hero.cta')}
        </Button>
      </div>

      {/* Scroll Indicator - Bouncing Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-10 w-10 text-white/70" strokeWidth={2.5} />
      </div>
    </section>
  );
};

export default Hero;
