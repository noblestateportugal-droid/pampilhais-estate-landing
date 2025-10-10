import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/hero-estate.jpg';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
          40.7 Hectares of Opportunity
          <br />
          <span className="text-primary">in Portugal's Blue Coast</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-white/90 max-w-3xl mx-auto">
          Direct Sale • No Agents • Exclusive Investment Opportunity
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          onClick={() => {
            // Placeholder - would link to actual PDF
            window.open('/assets/Pampilhais_Brochure.pdf', '_blank');
          }}
        >
          <Download className="mr-2 h-5 w-5" />
          Download Investor Brochure
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
