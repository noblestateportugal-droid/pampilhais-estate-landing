import { Card, CardContent } from '@/components/ui/card';
import { Home, Eye, Hammer, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VantageView = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Home,
      title: t('vantage.feature1.title'),
      description: t('vantage.feature1.desc'),
    },
    {
      icon: Eye,
      title: t('vantage.feature2.title'),
      description: t('vantage.feature2.desc'),
    },
    {
      icon: Hammer,
      title: t('vantage.feature3.title'),
      description: t('vantage.feature3.desc'),
    },
    {
      icon: TrendingUp,
      title: t('vantage.feature4.title'),
      description: t('vantage.feature4.desc'),
    },
  ];

  return (
    <section id="vantage" className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
            {t('vantage.title')}
            <span className="block text-2xl md:text-3xl text-primary mt-2">{t('vantage.subtitle')}</span>
          </h2>

          <p className="text-base md:text-lg text-foreground/80 text-center mb-6 max-w-3xl mx-auto">
            {t('vantage.description')} <strong className="text-foreground">~80 km</strong>.
          </p>

          {/* 360 Video */}
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden mb-10 shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/pt8SPVOK3-0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="360° view of Pampilhais homesite location"
              className="absolute inset-0"
            />
          </div>

          <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground mb-6 text-center">
            {t('vantage.whyTitle')}
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
