import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@/components/DecorativeGraphics';

const HERO_MEDIA = [
  { type: 'video', src: '/bakery2.webm' },
  { type: 'video', src: '/bakery.webm' },
  { type: 'image', src: 'https://images.pexels.com/photos/18721993/pexels-photo-18721993.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800' }
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_MEDIA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Restored to min-h-[100svh] so the background media covers the full screen
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-caketown-black">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {HERO_MEDIA.map((media, i) => {
          const isActive = i === activeIndex;
          return (
            <div 
              key={i}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 10 : 0 }}
            >
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt="Caketown Cafe Atmosphere"
                  className="w-full h-full object-cover"
                  style={{
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                    transition: isActive ? 'transform 10s ease-out' : 'none'
                  }}
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
        <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none" />
      </div>

      {/* Typography & CTA */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center pt-16">
        
        <div className="mb-4">
          <span className="text-[11px] sm:text-xs font-display font-semibold tracking-[0.3em] uppercase text-caketown-orange drop-shadow-md">
            Caketown Cafe
          </span>
        </div>

        {/* Font size controlled so the text doesn't fill the screen width */}
        <h1 className="font-display font-extrabold tracking-tightest leading-[0.92] text-white text-[13vw] sm:text-[10vw] lg:text-[6.5rem] drop-shadow-lg">
          <span className="block">CAKE.</span>
          <span className="block">COFFEE.</span>
          <span className="block text-caketown-orange">GOOD TIMES.</span>
        </h1>

        {/* Subtext forced onto a single line */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base text-white/90 w-full flex justify-center font-medium drop-shadow-md whitespace-nowrap">
          Cakes, pastries, desserts and coffee | baked fresh, served with a smile.
        </p>

        {/* Button is thin (py-3) and wide (px-20) */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/menu"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-caketown-orange text-white px-20 py-3 sm:px-24 sm:py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-caketown-black transition-all duration-300 shadow-xl shadow-black/20 active:scale-95 whitespace-nowrap"
          >
            Explore Menu
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}