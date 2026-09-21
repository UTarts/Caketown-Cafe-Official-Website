import { useEffect, useState, useCallback } from 'react';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { galleryImages } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Caketown Cafe Gallery';
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  const spanClass = (span?: string) => {
    if (span === 'tall') return 'row-span-2';
    if (span === 'wide') return 'col-span-2';
    return '';
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-caketown-cream pt-28 pb-16 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
              Gallery
            </p>
          </Reveal>
          <AnimatedHeading
            lines={['MOMENTS', 'WORTH', 'TASTING.']}
            className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[14vw] sm:text-[10vw] lg:text-[7rem]"
          />
        </div>
      </section>

      {/* Masonry grid */}
      <section className="bg-white py-12 sm:py-16 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <Reveal key={img.id} delay={(i % 4) * 60} className={spanClass(img.span)}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative w-full h-full overflow-hidden rounded-2xl active:scale-95 transition-all duration-300"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-caketown-black/0 group-hover:bg-caketown-black/20 transition-colors duration-300" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-caketown-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white p-2 z-10"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 sm:left-5 text-white p-2 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightboxIndex].url}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 sm:right-5 text-white p-2 z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
