import { useEffect, useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { useCaketown } from '@/context/CaketownStore';
import { MenuItem } from '@/data/menu';
import { Search, X, ArrowUpRight } from 'lucide-react';

export function MenuPage() {
  const { items, categories } = useCaketown();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || categories[0]?.id || 'cakes';

  const [activeCategory, setActiveCategory] = useState<string>(initialCat);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  useEffect(() => {
    const catFromUrl = searchParams.get('cat');
    if (catFromUrl && categories.some((c) => c.id === catFromUrl)) {
      setActiveCategory(catFromUrl);
    }
  }, [searchParams, categories]);

  useEffect(() => {
    document.title = 'Caketown Cafe | Menu';
    document.body.style.overflow = selectedProduct ? 'hidden' : 'unset';
  }, [selectedProduct]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = searchQuery.trim() ? true : item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [items, activeCategory, searchQuery]);

  const currentAmbience =
    categories.find((c) => c.id === activeCategory)?.ambience || '#FFF7EE';

  return (
    <div
      className="transition-colors duration-700 ease-in-out min-h-screen"
      style={{ backgroundColor: currentAmbience }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange block mb-4">
              Freshly Baked &amp; Brewed
            </span>
          </Reveal>
          <AnimatedHeading
            lines={['OUR', 'MENU.']}
            className="font-display font-black tracking-tighter leading-[0.9] text-caketown-black text-[15vw] sm:text-[10vw] lg:text-[7rem]"
          />

          {/* Sleek Search Bar (Fixed z-index so Search Icon stays visible above backdrop-blur) */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-caketown-black/55 absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Black Forest, Biscoff, Oreo Shake..."
              className="w-full pl-11 pr-10 py-3.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-sm text-caketown-black placeholder:text-caketown-black/40 outline-none focus:border-caketown-orange shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 z-10 text-caketown-black/40 hover:text-caketown-black"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Menu Section */}
      <section className="pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* 1. 3D Pop-Out Miniature Categories Navigation (Kept 100% As Is) */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 pt-8">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id && !searchQuery.trim();
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory(cat.id);
                    setSearchParams({ cat: cat.id });
                  }}
                  className="relative block pt-8 outline-none group"
                >
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-end justify-center pb-3 shadow-md transition-all duration-500 ease-out ${
                      isActive
                        ? 'scale-110 shadow-xl opacity-100'
                        : 'scale-100 opacity-65 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: cat.bgColor }}
                  >
                    <span
                      className="font-display font-bold text-xs sm:text-sm tracking-wide"
                      style={{ color: cat.textColor }}
                    >
                      {cat.label}
                    </span>
                  </div>

                  <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className={`w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl transition-transform duration-500 ease-out ${
                        isActive ? 'scale-110 -translate-y-3' : 'group-hover:-translate-y-2'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* 2. Updated Sharp Architectural Product Grid */}
          <div className="min-h-[50vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={searchQuery ? 'search' : activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
              >
                {filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className="group bg-white border border-[#111111]/15 hover:border-[#111111] flex flex-col justify-between text-left outline-none rounded-none transition-all duration-300 shadow-sm hover:shadow-xl"
                  >
                    <div className="aspect-square w-full bg-[#FAF6F0] overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#111111] text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="p-4 w-full border-t border-[#111111]/10 flex items-center justify-between gap-2 bg-white group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-sm sm:text-base uppercase tracking-tight truncate">
                          {item.name}
                        </h3>
                        {item.price ? (
                          <span className="text-xs font-bold text-[#F47A1F] mt-0.5 block">
                            {item.price}
                          </span>
                        ) : (
                          <span className="text-[10px] uppercase tracking-[0.18em] opacity-50 block mt-0.5">
                            {item.category}
                          </span>
                        )}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#F47A1F] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </button>
                ))}

                {filteredItems.length === 0 && (
                  <div className="col-span-full text-center py-20 text-caketown-black/40 font-medium">
                    No items found matching your search.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. Updated Sharp Architectural Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-white border-2 border-[#111111] rounded-none overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#111111] text-white flex items-center justify-center hover:bg-[#F47A1F] transition-colors rounded-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-1/2 bg-[#FAF6F0] flex items-center justify-center min-h-[36vh] md:min-h-0 relative border-b md:border-b-0 md:border-r border-[#111111]/12">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-between bg-white overflow-y-auto">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#FAF6F0] border border-[#111111]/15 text-[10px] font-bold tracking-[0.25em] uppercase text-[#F47A1F] mb-4">
                    CAKETOWN / {selectedProduct.category}
                  </span>

                  <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-[#111111] leading-none mb-4">
                    {selectedProduct.name}
                  </h2>

                  {selectedProduct.price && (
                    <p className="text-xl font-display font-bold text-[#F47A1F] mb-4">
                      {selectedProduct.price}
                    </p>
                  )}

                  <div className="w-12 h-[2px] bg-[#111111] mb-6" />

                  <p className="text-[#111111]/70 text-sm sm:text-base leading-relaxed font-medium mb-8">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#F47A1F] text-white py-4 px-8 text-xs font-bold uppercase tracking-[0.22em] transition-colors rounded-none"
                  >
                    <span>Order / Enquire Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}