import { Button } from '@/components/ui/button';
import { Download, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PropertyDescription = () => {
  const { t } = useLanguage();
  
  const developmentPoints = [
    t('description.point1'),
    t('description.point2'),
    t('description.point3'),
  ];

  return (
    <section id="property" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-center">
            {t('description.title1')}
            <br />
            <span className="text-primary">{t('description.title2')}</span>
          </h2>

          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed mb-10">
            <p dangerouslySetInnerHTML={{ __html: t('description.para1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('description.para2') }} />
          </div>

          {/* Zoning and Development Potential */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8 shadow-md">
            <h3 className="font-serif font-semibold text-2xl md:text-3xl text-foreground mb-6">
              {t('description.zoningTitle')}
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

          <p className="text-lg md:text-xl text-center text-foreground/70 mb-8 italic" dangerouslySetInnerHTML={{ __html: t('description.exceptional') }} />

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                window.open('/Brochure_Pampilhais.pdf', '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              {t('description.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDescription;
