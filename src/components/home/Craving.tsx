import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/menu';

const platformColors = ['#F47A1F', '#E43838', '#4A2418', '#FFF7EE', '#FFDCCB'];

export function Craving() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (children.length === 0) return;
      const center = el.scrollLeft + el.offsetWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-caketown-cream py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-8 lg:mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-caketown-orange block mb-2">
              Find your flavour
            </span>
            <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[12vw] sm:text-[8vw] lg:text-[5rem]">
              WHAT ARE
              <br />
              YOU CRAVING?
            </h2>
          </div>
          <Link
            to="/menu"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-caketown-black/60 hover:text-caketown-orange transition-colors flex-shrink-0 pb-2"
          >
            Browse all
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Mobile: horizontal scroll-snap. Desktop: editorial grid */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex lg:grid lg:grid-cols-5 overflow-x-auto snap-x-mandatory lg:overflow-visible gap-4 lg:gap-3 px-5 lg:px-12"
      >
        {categories.map((cat, i) => {
          const isActive = i === activeIndex;
          const color = platformColors[i % platformColors.length];
          const isLight = color === '#FFF7EE' || color === '#FFDCCB';
          const scaleMobile = isActive ? 1 : 0.88;
          const isDesktopOffset = i === 0 || i === 4;

          return (
            <Link
              key={cat.id}
              to="/menu"
              className="snap-center flex-shrink-0 lg:flex-shrink group block"
              style={{
                width: '78vw',
                maxWidth: '320px',
              }}
            >
              <div
                className="relative"
                style={{
                  transform: `scale(${scaleMobile})`,
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  marginTop: isDesktopOffset ? '0' : '24px',
                }}
              >
                {/* Colored rectangular platform */}
                <div
                  className="relative rounded-2xl overflow-visible flex flex-col items-center justify-end pb-6 pt-20"
                  style={{
                    backgroundColor: color,
                    height: '220px',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Food image breaking out above the platform */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 z-10"
                    style={{
                      top: '-60px',
                      width: '140px',
                      height: '140px',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <img
                      src={cat.image}
                      alt={cat.label}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl shadow-xl shadow-caketown-black/15 transition-transform duration-400 group-hover:scale-105 group-hover:-translate-y-2"
                    />
                  </div>

                  {/* Label on the platform */}
                  <div className="relative z-20 text-center">
                    <h3
                      className={`font-display font-bold text-lg ${isLight ? 'text-caketown-black' : 'text-white'}`}
                    >
                      {cat.label}
                    </h3>
                    <span
                      className={`text-[11px] font-medium mt-0.5 block ${isLight ? 'text-caketown-black/50' : 'text-white/60'}`}
                    >
                      Tap to explore
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile hint dots */}
      <div className="flex justify-center gap-1.5 mt-6 lg:hidden">
        {categories.map((_, i) => (
          <span
            key={i}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? '20px' : '6px',
              backgroundColor: i === activeIndex ? '#F47A1F' : 'rgba(17,17,17,0.12)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
