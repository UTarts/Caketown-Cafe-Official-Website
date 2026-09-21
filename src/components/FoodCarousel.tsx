import { useEffect, useRef, useState } from 'react';
import type { MenuItem } from '@/data/menu';

interface FoodCarouselProps {
  items: MenuItem[];
  platformColor?: string;
  textOnDark?: boolean;
}

const platformColors = ['#F47A1F', '#E43838', '#4A2418', '#FFF7EE', '#FFDCCB'];

export function FoodCarousel({ items, textOnDark = false }: FoodCarouselProps) {
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

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement;
    if (child) {
      el.scrollTo({
        left: child.offsetLeft - el.offsetWidth / 2 + child.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="no-scrollbar flex overflow-x-auto snap-x-mandatory py-12 px-[12vw] cursor-grab active:cursor-grabbing"
      >
        {items.map((item, i) => {
          const isActive = i === activeIndex;
          const distance = Math.abs(i - activeIndex);
          const scale = isActive ? 1 : Math.max(0.68, 1 - distance * 0.16);
          const opacity = isActive ? 1 : Math.max(0.4, 1 - distance * 0.25);
          const color = platformColors[i % platformColors.length];
          const isLight = color === '#FFF7EE' || color === '#FFDCCB';

          return (
            <div
              key={item.id}
              className="snap-center flex-shrink-0 flex flex-col items-center justify-center"
              style={{ width: '76vw', maxWidth: '380px', minWidth: '260px' }}
              onClick={() => scrollToIndex(i)}
            >
              <div
                className="relative transition-all duration-500 ease-out"
                style={{ transform: `scale(${scale})`, opacity }}
              >
                {/* Colored rectangular platform */}
                <div
                  className="relative rounded-2xl flex flex-col items-center justify-end pb-7 pt-24"
                  style={{
                    backgroundColor: color,
                    height: '300px',
                    width: '100%',
                    transition: 'background-color 0.4s ease',
                  }}
                >
                  {/* Food image breaking out above the platform */}
                  <div
                    className="absolute left-1/2 -translate-x-1/2 z-10"
                    style={{
                      top: '-70px',
                      width: '170px',
                      height: '170px',
                      transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl shadow-2xl shadow-caketown-black/20"
                    />
                  </div>

                  {/* Product text on the platform */}
                  <div className="relative z-20 text-center px-4">
                    <h3
                      className={`text-base font-display font-bold ${isLight ? 'text-caketown-black' : 'text-white'}`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 max-w-[220px] mx-auto ${isLight ? 'text-caketown-black/50' : 'text-white/60'}`}
                    >
                      {item.description}
                    </p>
                    <p
                      className={`text-sm font-display font-bold mt-2 ${isLight ? 'text-caketown-orange' : 'text-white'}`}
                    >
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to item ${i + 1}`}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? '24px' : '8px',
              backgroundColor: i === activeIndex
                ? (textOnDark ? '#F47A1F' : '#F47A1F')
                : textOnDark ? 'rgba(255,255,255,0.2)' : 'rgba(17,17,17,0.15)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
