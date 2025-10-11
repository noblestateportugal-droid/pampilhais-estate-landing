import { Button } from '@/components/ui/button';
import { Download, CheckCircle2 } from 'lucide-react';

const PropertyDescription = () => {
  const developmentPoints = [
    '500 m² residential villa project submitted to CMG',
    '8,000 m² agricultural structures approved for rural operations',
    'Tourism project potential: ~110 beds (subject to final municipal confirmation)',
  ];

  return (
    <section id="property" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-center">
            A Rare Land Investment in Portugal's
            <br />
            <span className="text-primary">Fastest-Growing Luxury Corridor</span>
          </h2>

          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed mb-10">
            <p>
              Discover <strong className="text-foreground">Pampilhais</strong> — a 40.7-hectare
              estate located on the border between Grândola and Santa Margarida da Serra, in the
              heart of the Alentejo countryside. Just 30 minutes from Comporta and 20 minutes from
              Melides, this property combines natural beauty, development potential, and long-term
              appreciation.
            </p>

            <p>
              The land includes over <strong className="text-foreground">5 km of newly built
              internal roads</strong>, with sweeping panoramic views across cork oaks, holm oaks,
              and strawberry trees. A private dam with a natural spring and a well ensure
              sustainable water supply year-round — ideal for both agricultural and hospitality
              uses.
            </p>
          </div>

          {/* Zoning and Development Potential */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8 shadow-md">
            <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground mb-6">
              Zoning and Development Potential
            </h3>
            <ul className="space-y-4">
              {developmentPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg md:text-xl text-center text-foreground/70 mb-8 italic">
            Exceptional for: <strong className="text-foreground">boutique eco-resort/wellness
            retreat</strong> • <strong className="text-foreground">private family estate</strong> •{' '}
            <strong className="text-foreground">regenerative agriculture + tourism</strong>
          </p>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                window.open('/Brochure_Pampilhais.pdf', '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download the Investor Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDescription;
