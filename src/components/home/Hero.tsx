import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from '@/components/DecorativeGraphics';
import { useCaketown } from '@/context/CaketownStore';

const HERO_MEDIA = [
  { type: 'video', src: '/bakery2.webm' },
  { type: 'video', src: '/bakery.webm' },
  {
    type: 'image',
    src: 'https://images.pexels.com/photos/18721993/pexels-photo-18721993.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  },
];

export function Hero() {
  const { theme } = useCaketown();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_MEDIA.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-caketown-black">
      {/* Background Video / Media Layer */}
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
                    transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    transition: isActive ? 'transform 8s ease-out' : 'none',
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
        {/* Multi-Stop Editorial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75 z-20 pointer-events-none" />
      </div>

      {/* Top Spacer for Fixed Header */}
      <div className="h-24" />

      {/* Center Kinetic Typography & CTA */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-5 sm:px-8 text-center my-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5  bg-white/10 backdrop-blur-md border border-white/15 mb-6"
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: theme.brandOrange }}
          />
          <span className="text-[10px] sm:text-xs font-display font-bold tracking-[0.28em] uppercase text-white">
            {theme.heroEyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold tracking-tightest leading-[0.9] text-white text-[13vw] sm:text-[10vw] lg:text-[6.8rem] drop-shadow-2xl"
        >
          <span className="block">{theme.heroLine1}</span>
          <span className="block">{theme.heroLine2}</span>
          <span className="block" style={{ color: theme.brandOrange }}>
            {theme.heroLine3}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 sm:mt-6 text-xs sm:text-base text-white/85 max-w-xl mx-auto font-medium drop-shadow-md"
        >
          {theme.heroSubtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/menu"
            style={{ backgroundColor: theme.brandOrange }}
            className="group inline-flex items-center justify-center gap-3  text-white px-12 py-3.5 sm:px-16 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-caketown-black transition-all duration-300 shadow-2xl active:scale-95"
          >
            Explore Menu
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/locations"
            className="inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase hover:bg-white hover:text-caketown-black transition-all duration-300"
          >
            3 Outlets
          </Link>
        </motion.div>
      </div>

      {/* Bottom Infinite Kinetic Bakery Ticker */}
      <div className="relative z-30 border-t border-white/10 bg-black/60 backdrop-blur-md py-3 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex w-max whitespace-nowrap gap-10 text-[11px] font-display font-bold tracking-[0.24em] uppercase text-white/80"
        >
          <span>{theme.tickerText}</span>
          <span>{theme.tickerText}</span>
        </motion.div>
      </div>
    </section>
  );
}