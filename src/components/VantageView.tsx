import { Card, CardContent } from '@/components/ui/card';
import { Eye, Home, Compass, Image as ImageIcon } from 'lucide-react';

const VantageView = () => {
  const features = [
    {
      icon: Home,
      title: 'Pre-submitted homesite',
      description: 'Faster path to a signature residence',
    },
    {
      icon: Compass,
      title: 'Commanding outlook',
      description: 'Guiding master-planning across 40.7 ha',
    },
    {
      icon: Eye,
      title: 'Orientation clarity',
      description: 'Optimize solar, wind, privacy',
    },
    {
      icon: ImageIcon,
      title: 'Storytelling asset',
      description: 'For private estate or boutique eco-hospitality',
    },
  ];

  return (
    <section id="vantage" className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            360° Vantage — Homesite In Approval
            <span className="block text-2xl md:text-3xl text-primary mt-2">(500 m²)</span>
          </h2>

          <p className="text-base md:text-lg text-foreground/80 text-center mb-6 max-w-3xl mx-auto">
            This 360° video was captured exactly at the location where the 500 m² private residence
            project has been submitted to Grândola City Council for approval. On clear days,
            visibility extends up to <strong className="text-foreground">~80 km</strong>.
          </p>

          {/* 360 Viewer Placeholder */}
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden mb-10 shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Eye className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  360° Interactive View
                  <br />
                  <span className="text-sm">(Embed Kuula / Matterport / YouTube 360)</span>
                </p>
              </div>
            </div>
            {/* Replace with actual embed:
            <iframe
              src="YOUR_360_EMBED_URL"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="360° view of Pampilhais homesite location"
            />
            */}
          </div>

          <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground mb-6 text-center">
            Why This Spot Matters
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-foreground/70">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VantageView;
