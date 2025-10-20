import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import galleryMap from '@/assets/gallery-map.jpg';
import drone1 from '@/assets/drone-1.jpg';
import drone2 from '@/assets/drone-2.jpg';
import drone3 from '@/assets/drone-3.jpg';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: gallery1, alt: 'Traditional Portuguese farm buildings at Pampilhais Estate' },
    { src: gallery2, alt: 'Panoramic landscape view with natural water dam' },
    { src: gallery3, alt: 'Estate buildings set in verdant countryside' },
    { src: gallery4, alt: 'Rustic farm structures with cork oak forest backdrop' },
    { src: gallery5, alt: 'Sweeping vista with ocean views on the horizon' },
    { src: galleryMap, alt: 'Location map showing Pampilhais Estate and surrounding areas' },
    { src: drone1, alt: 'Aerial drone view of Pampilhais Estate showing expansive landscape' },
    { src: drone2, alt: 'Drone photography capturing estate buildings and surrounding terrain' },
    { src: drone3, alt: 'Bird\'s eye view of cork oak forests and natural vegetation' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-10 text-center">
          {t('gallery.title')}
        </h2>

        {/* Mobile: Horizontal scrollable gallery */}
        <div className="md:hidden relative overflow-x-auto">
          <div className="flex gap-4 pb-4 snap-x snap-mandatory overflow-x-auto scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative flex-shrink-0 w-[280px] sm:w-[320px] aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary snap-start"
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Multi-column grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* YouTube Video Section */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/_-AsZpupTgA"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Pampilhais Estate video tour"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Close gallery"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-4 p-2 text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div className="max-w-6xl max-h-[90vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/80 mt-4 text-sm md:text-base">
              {images[selectedImage].alt}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-4 p-2 text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
