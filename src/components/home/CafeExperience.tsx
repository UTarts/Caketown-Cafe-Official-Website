import { useRef, useEffect, useState } from 'react';
import { AnimatedHeading } from '@/components/AnimatedHeading';

// ==========================================
// 🎞️ MEDIA PLAYLIST
// Add as many images or videos as you want here. 
// Videos will auto-play silently.
// ==========================================
const MEDIA_PLAYLIST = [
  { 
    type: 'video', 
    src: '/bakery2.webm' 
  },
  { 
    type: 'video', 
    // Example placeholder video - replace with a direct link to your raw .mp4 or .webm file
    src: "/bakery.webm" 
  },
  { 
    type: 'image', 
    src: 'https://images.pexels.com/photos/18721993/pexels-photo-18721993.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800' 
  }
];

export function CafeExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll Zoom Physics
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = 1 - rect.top / windowHeight;
        setZoom(1 + Math.min(progress * 0.12, 0.12));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slideshow Timer (5000ms = 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % MEDIA_PLAYLIST.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-caketown-black text-white py-0 overflow-hidden">
      <div ref={ref} className="relative h-[80vh] sm:h-[90vh] overflow-hidden bg-[#111]">
        
        {/* Media Layer */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ transform: `scale(${zoom})`, transition: 'transform 0.1s linear' }}
        >
          {MEDIA_PLAYLIST.map((media, i) => {
            const isActive = i === activeIndex;
            return (
              <div 
                key={i}
                // 1000ms duration for a luxurious, slow cross-fade
                className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
                style={{ 
                  opacity: isActive ? 1 : 0, 
                  zIndex: isActive ? 10 : 0 
                }}
              >
                {media.type === 'image' ? (
                  <img
                    src={media.src}
                    alt="Caketown Cafe Atmosphere"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Gradient Overlay & Text Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-caketown-black via-caketown-black/30 to-transparent z-20 pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-12 z-30 pointer-events-none">
          <div className="max-w-7xl mx-auto">
            <AnimatedHeading
              lines={['COME FOR', 'THE CAKE.', 'STAY FOR', 'THE MOMENT.']}
              className="font-display font-extrabold tracking-tightest leading-[0.9] text-[10vw] sm:text-[7vw] lg:text-[5rem]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}