import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Building2, CheckCircle2, Download } from 'lucide-react';

const InvestmentSnapshot = () => {
  const appreciationPoints = [
    'Rural/agri land up ~33% (2021–2023); some regions doubled',
    'Residential/tourism near Comporta & Melides: +28% annual growth',
    'Some luxury segments tripled in value over two years',
  ];

  const majorProjects = [
    {
      name: 'Six Senses Comporta',
      description: '€1.7B eco-resort & branded residences (Pinheirinho)',
    },
    {
      name: 'Costa Terra Ocean & Golf Club',
      description: 'Private resort community by Discovery Land Company (Melides)',
    },
    {
      name: 'Vermelho Hotel',
      description: 'Boutique hotel by Christian Louboutin (Melides)',
    },
  ];

  const whyPampilhais = [
    'Strategic position between luxury destinations',
    'Sustainable natural resources (dam, well, cork forest)',
    'Clear zoning path (residential/agricultural/tourism)',
    'Private sale (no agent commissions)',
    'Eligible for direct investment or joint venture',
  ];

  return (
    <section id="investment" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            Investment Snapshot:
            <br />
            <span className="text-primary">Alentejo's Growth Story</span>
          </h2>
          <p className="text-center text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            The Alentejo region has seen explosive growth in luxury real estate and hospitality,
            with €1.3B+ invested in nearby developments.
          </p>

          {/* Land Appreciation */}
          <div className="mb-10">
            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground">
                    Land Appreciation
                  </h3>
                </div>
                <ul className="space-y-3">
                  {appreciationPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Investment Environment */}
          <div className="mb-10">
            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground">
                    Investment Environment
                  </h3>
                </div>
                <p className="text-base text-foreground/80 mb-6">
                  <strong className="text-foreground">€1.3B+ invested</strong> in nearby luxury
                  resorts and hospitality (Comporta, Melides, Carvalhal, Tróia).
                </p>
                <div className="space-y-4">
                  {majorProjects.map((project, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-lg text-foreground">{project.name}</h4>
                      <p className="text-sm text-foreground/70">{project.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Pampilhais */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-10 shadow-md">
            <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground mb-6 text-center">
              Why Pampilhais?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyPampilhais.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground/80">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                window.open('/Brochure_Pampilhais.pdf', '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download the Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSnapshot;
