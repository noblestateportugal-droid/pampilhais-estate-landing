import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section id="map" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-center">
          Strategic Location
        </h2>
        <p className="text-center text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Pampilhais is perfectly positioned between Grândola, Melides, and Comporta — Portugal's
          most sought-after coastal destinations.
        </p>

        <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                Interactive Map
                <br />
                <span className="text-sm">(Google Maps Embed)</span>
              </p>
            </div>
          </div>
          {/* Replace with actual Google Maps embed:
          <iframe
            src="YOUR_GOOGLE_MAPS_EMBED_URL"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing Pampilhais Estate location near Grândola, Melides, and Comporta"
          />
          */}
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
