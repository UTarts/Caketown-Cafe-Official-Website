import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { CTA } from '@/components/CTA';
import { menuItems } from '@/data/menu';

// ==========================================
// 🎨 CATEGORIES & DYNAMIC AMBIENCE
// ==========================================
const CATEGORIES = [
  { id: 'cakes', label: 'Cakes', bgColor: '#F47A1F', textColor: '#FFFFFF', image: '/cake.webp', ambience: '#FFF7EE' }, // Soft Orange tint
  { id: 'pastries', label: 'Pastries', bgColor: '#E43838', textColor: '#FFFFFF', image: '/pastry.webp', ambience: '#FFF0F0' }, // Soft Red tint
  { id: 'desserts', label: 'Desserts', bgColor: '#4A2418', textColor: '#FFFFFF', image: '/pudding.webp', ambience: '#FDF7F2' }, // Soft Caramel tint
  { id: 'coffee', label: 'Coffee', bgColor: '#C59A75', textColor: '#111111', image: '/Americano.webp', ambience: '#F9F6F0' }, // Soft Mocha tint
  { id: 'shakes', label: 'Shakes', bgColor: '#111111', textColor: '#FFFFFF', image: '/shake.webp', ambience: '#F4F5F7' }, // Soft cool tint
  { id: 'donuts', label: 'Donuts', bgColor: '#D96A15', textColor: '#FFFFFF', image: '/donut.webp', ambience: '#FFF3E8' }, // Soft Peach tint
];

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [selectedProduct, setSelectedProduct] = useState<typeof menuItems[0] | null>(null);

  useEffect(() => {
    document.title = 'Caketown Cafe | Menu';
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProduct]);

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);
  
  // Get the current background ambience color based on the selected category
  const currentAmbience = CATEGORIES.find(c => c.id === activeCategory)?.ambience || '#FDFBF7';

  return (
    // The entire page background transitions smoothly based on the active category
    <div 
      className="transition-colors duration-1000 ease-in-out min-h-screen"
      style={{ backgroundColor: currentAmbience }}
    >
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange block mb-4">
              Premium Bakery
            </span>
          </Reveal>
          <AnimatedHeading
            lines={['OUR', 'MENU.']}
            className="font-display font-black tracking-tighter leading-[0.9] text-caketown-black text-[15vw] sm:text-[10vw] lg:text-[7rem]"
          />
        </div>
      </section>

      {/* Main Menu Section */}
      <section className="pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* 1. Miniature Categories Navigation */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 pt-8">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="relative block pt-8 outline-none group"
                >
                  {/* Square Background */}
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-end justify-center pb-3 shadow-md transition-all duration-500 ease-out ${
                      isActive ? 'scale-110 shadow-xl opacity-100' : 'scale-100 opacity-60 hover:opacity-100'
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

                  {/* Overlapping Image */}
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

          {/* 2. Squarish Product Grid (Full frame images, no prices) */}
          <div className="min-h-[50vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
              >
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                    className="group flex flex-col text-left outline-none"
                  >
                    {/* Squarish Card - No padding, image fills the whole frame */}
                    <div className="aspect-square bg-white rounded-[2rem] overflow-hidden shadow-sm border border-black/5 relative mb-4 transition-all duration-500 group-hover:shadow-xl group-hover:border-caketown-orange/30 group-active:scale-95">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Typography - Price removed */}
                    <div className="px-2">
                      <h3 className="font-display font-bold text-caketown-black text-base sm:text-lg leading-tight transition-colors group-hover:text-caketown-orange">
                        {item.name}
                      </h3>
                    </div>
                  </button>
                ))}
                
                {filteredItems.length === 0 && (
                  <div className="col-span-full text-center py-20 text-caketown-black/40 font-medium">
                    No items found in this category.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-caketown-black hover:bg-caketown-orange hover:text-white transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L13 1M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Left: Large Image Area */}
              <div className="w-full md:w-1/2 bg-caketown-cream p-0 sm:p-0 flex items-center justify-center min-h-[40vh] md:min-h-0 relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover animate-float-slow" // Object-cover fills the left side of the modal
                />
              </div>

              {/* Right: Details & CTA */}
              <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white overflow-y-auto">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-caketown-orange mb-3">
                  {selectedProduct.category}
                </span>
                
                {/* Price removed from here as well */}
                <h2 className="text-3xl sm:text-4xl font-display font-black text-caketown-black leading-tight mb-6">
                  {selectedProduct.name}
                </h2>
                
                <div className="w-12 h-0.5 bg-black/10 mb-6" />
                
                <p className="text-caketown-black/70 leading-relaxed font-medium mb-8">
                  {selectedProduct.description}
                </p>

                <div className="mt-auto pt-4">
                  <CTA to="/contact" variant="dark" className="w-full justify-center">
                    Enquire Now
                  </CTA>
                </div>
              </div>
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}