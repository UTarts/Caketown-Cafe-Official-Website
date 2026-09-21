import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { CTA } from '@/components/CTA';
import { menuItems, categories, type MenuCategory } from '@/data/menu';
import { FoodCarousel } from '@/components/FoodCarousel';
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

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('cakes');
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    document.title = 'Caketown Cafe Menu';
  }, []);

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);
  const bgColor = categoryBg[activeCategory];

  const handleCategoryChange = (cat: MenuCategory) => {
    if (cat === activeCategory) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setTransitioning(false);
    }, 250);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-caketown-cream pt-28 pb-16 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-caketown-orange block mb-3">
              Our Menu
            </span>
          </Reveal>
          <AnimatedHeading
            lines={['CAKES.', 'COFFEE.', 'EVERYTHING', 'FRESH.']}
            className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[12vw] sm:text-[8vw] lg:text-[5.5rem]"
          />
        </div>
      </section>

      {/* Category icon navigation + horizontal showcase */}
      <section
        className="relative py-16 sm:py-20 overflow-hidden transition-colors duration-700"
        style={{ backgroundColor: bgColor }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Category icons */}
          <div className="flex justify-center gap-1 sm:gap-2 mb-10">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.id];
              const isActive = cat.id === activeCategory;
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
                  <span
                    className="h-0.5 rounded-full bg-white transition-all duration-300"
                    style={{ width: isActive ? '20px' : '0px' }}
                  />
                </button>
              );
            })}
          </div>

          {/* Product carousel with transition */}
          <div
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? 'translateX(-20px)' : 'translateX(0)',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
            }}
          >
            <FoodCarousel items={filteredItems} textOnDark />
          </div>
        </div>
      </section>

      {/* Enquire CTA */}
      <section className="bg-caketown-cream py-16 px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display font-extrabold tracking-tightest text-caketown-black text-2xl sm:text-3xl mb-3">
              Can't find what you're looking for?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-sm text-caketown-black/60 mb-6">
              We bake custom cakes and seasonal treats. Tell us what you need.
            </p>
          </Reveal>
          <CTA to="/contact" variant="dark">
            Enquire Now
          </CTA>
        </div>
      </section>
    </>
  );
}
