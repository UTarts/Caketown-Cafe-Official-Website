import { useState } from 'react';
import { FoodCarousel } from '@/components/FoodCarousel';
import { CTA } from '@/components/CTA';
import { menuItems, categories, type MenuCategory } from '@/data/menu';
import {
  CakeSliceIcon,
  CroissantIcon,
  DessertCupIcon,
  CoffeeCupIcon,
  CookieIcon,
} from '@/components/DecorativeGraphics';

const categoryIcons: Record<MenuCategory, typeof CakeSliceIcon> = {
  cakes: CakeSliceIcon,
  pastries: CroissantIcon,
  desserts: DessertCupIcon,
  coffee: CoffeeCupIcon,
  snacks: CookieIcon,
};

const categoryBg: Record<MenuCategory, string> = {
  cakes: '#F47A1F',
  pastries: '#E43838',
  desserts: '#4A2418',
  coffee: '#F47A1F',
  snacks: '#E43838',
};

export function MenuCarousel() {
  const [activeCat, setActiveCat] = useState<MenuCategory>('cakes');
  const [transitioning, setTransitioning] = useState(false);

  const filtered = menuItems.filter((item) => item.category === activeCat);
  const bgColor = categoryBg[activeCat];

  const handleCategoryChange = (cat: MenuCategory) => {
    if (cat === activeCat) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveCat(cat);
      setTransitioning(false);
    }, 250);
  };

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden transition-colors duration-700" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60 block mb-2">
            Swipe to explore
          </span>
          <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-white text-[10vw] sm:text-[7vw] lg:text-[5rem]">
            TODAY'S
            <br />
            FAVOURITES
          </h2>
        </div>

        {/* Category icon navigation */}
        <div className="flex justify-center gap-1 sm:gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            const isActive = cat.id === activeCat;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className="group flex flex-col items-center gap-1 px-3 sm:px-5 py-2 rounded-2xl transition-all duration-300 active:scale-95"
                style={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                }}
              >
                <Icon
                  className="w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300"
                  style={{
                    color: 'white',
                    opacity: isActive ? 1 : 0.5,
                    transform: isActive ? 'scale(1.1)' : 'scale(0.9)',
                  }}
                />
                <span
                  className="text-[10px] sm:text-xs font-semibold tracking-wide transition-all duration-300"
                  style={{
                    color: 'white',
                    opacity: isActive ? 1 : 0.5,
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {cat.label}
                </span>
                {/* Active marker */}
                <span
                  className="h-0.5 rounded-full bg-white transition-all duration-300"
                  style={{ width: isActive ? '20px' : '0px' }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Product carousel — with transition */}
      <div
        style={{
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? 'translateX(-20px)' : 'translateX(0)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <FoodCarousel items={filtered.length > 0 ? filtered : menuItems.slice(0, 4)} textOnDark />
      </div>

      <div className="text-center mt-10">
        <CTA to="/menu" variant="white">
          View Full Menu
        </CTA>
      </div>
    </section>
  );
}
