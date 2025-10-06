import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Euro, Maximize2, Navigation } from 'lucide-react';

const PropertyHighlights = () => {
  const highlights = [
    {
      icon: Euro,
      label: 'Price',
      value: '€1,200,000',
      subtitle: '(flexible to €1,100,000)',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Grândola / Santa Margarida da Serra',
      subtitle: 'Alentejo, Portugal',
    },
    {
      icon: Maximize2,
      label: 'Total Area',
      value: '40.7 hectares',
      subtitle: '(407,000 m²)',
    },
    {
      icon: Navigation,
      label: 'Access',
      value: 'Strategic Position',
      subtitle: 'Grândola 12 min • Melides Beach 20 min',
    },
  ];

  return (
    <section id="highlights" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow duration-300 bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {item.label}
                  </p>
                  <h3 className="font-serif font-semibold text-xl md:text-2xl text-foreground mb-1">
                    {item.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyHighlights;
