import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@/components/DecorativeGraphics';

// ==========================================
// 🎛️ MANUAL CONTROL PANEL
// ==========================================
const CONTROLS = {
  // 1. Raw Image Settings (Slightly larger to let the transparent shapes pop)
  imgSizeMobile: 'w-28 h-28',
  imgSizeDesktop: 'lg:w-40 lg:h-40',

  // 2. Animation Physics
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },

  // 3. Background Shape Motion
  bgRest: { scale: 1, y: 0 },
  bgHover: { scale: 1.04, y: -8 },

  // 4. Image Motion
  imgRest: { scale: 1, y: 0 },
  imgHover: { scale: 1.15, y: -24 },
};

// ==========================================
// 🎨 CATEGORIES & COLORS DATA
// ==========================================
const CATEGORIES = [
  { id: 'cakes', label: 'Cakes', bgColor: '#F47A1F', textColor: '#FFFFFF', image: '/cake.webp' },
  { id: 'pastries', label: 'Pastries', bgColor: '#E43838', textColor: '#FFFFFF', image: '/pastry.webp' },
  { id: 'desserts', label: 'Desserts', bgColor: '#4A2418', textColor: '#FFFFFF', image: '/pudding.webp' },
  { id: 'coffee', label: 'Coffee', bgColor: '#C59A75', textColor: '#111111', image: '/Americano.webp' },
  { id: 'shakes', label: 'Shakes', bgColor: '#111111', textColor: '#FFFFFF', image: '/shake.webp' },
  { id: 'donuts', label: 'Donuts', bgColor: '#D96A15', textColor: '#FFFFFF', image: '/donut.webp' },
];

export function Craving() {
  return (
    <section className="bg-caketown-cream py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header & Link Row */}
        <div className="mb-14 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 text-center lg:text-left">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-caketown-orange block mb-2">
              Find your flavour
            </span>
            <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[12vw] sm:text-[8vw] lg:text-[5rem]">
              WHAT ARE<br />YOU CRAVING?
            </h2>
          </div>
          
          {/* Explore Link */}
          <Link 
            to="/menu" 
            className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-caketown-black/60 hover:text-caketown-orange transition-colors pb-2"
          >
            Explore all items
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6-Column Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-16 lg:gap-x-6 lg:gap-y-0 mt-12">
          {CATEGORIES.map((cat) => (
            
            <motion.div
              key={cat.id}
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              animate="rest"
            >
              <Link to="/menu" className="relative block pt-12 lg:pt-16 outline-none">
                
                {/* 1. The Square Background */}
                <motion.div
                  variants={{ rest: CONTROLS.bgRest, hover: CONTROLS.bgHover }}
                  transition={CONTROLS.transition}
                  className="w-full aspect-square rounded-[2rem] flex items-end justify-center pb-6 lg:pb-8 shadow-md"
                  style={{ backgroundColor: cat.bgColor }}
                >
                  <h3 
                    className="font-display font-bold text-lg lg:text-xl tracking-tight" 
                    style={{ color: cat.textColor }}
                  >
                    {cat.label}
                  </h3>
                </motion.div>

                {/* 2. The Raw Overlapping Image */}
                <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
                  <motion.img
                    variants={{ rest: CONTROLS.imgRest, hover: CONTROLS.imgHover }}
                    transition={CONTROLS.transition}
                    src={cat.image}
                    alt={cat.label}
                    // Removed borders, backgrounds, and switched to object-contain & drop-shadow
                    className={`${CONTROLS.imgSizeMobile} ${CONTROLS.imgSizeDesktop} object-contain drop-shadow-2xl pointer-events-auto`}
                  />
                </div>

              </Link>
            </motion.div>

          ))}
        </div>

      </div>
    </section>
  );
}