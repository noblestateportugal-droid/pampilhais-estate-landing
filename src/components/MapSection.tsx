import { MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const MapSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="map" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
          {t('map.title')}
        </h2>
        <p className="text-center text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t('map.subtitle')}
        </p>

        <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d25107.64980998999!2d-8.614774100825564!3d38.12958329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDA3JzQ2LjUiTiA4wrAzNCczNi4wIlc!5e0!3m2!1sen!2sin!4v1760185982419!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Pampilhais Estate location near Grândola, Melides, and Comporta"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {[
            { name: 'Grândola', time: '12 min' },
            { name: 'Santa Margarida', time: '8 min' },
            { name: 'Melides Beach', time: '20 min' },
            { name: 'Comporta', time: '30 min' },
            { name: 'Tróia', time: '45 min' },
          ].map((location, index) => (
            <div key={index} className="text-center p-4 bg-card rounded-lg border border-border">
              <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground text-sm">{location.name}</p>
              <p className="text-xs text-muted-foreground">{location.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
