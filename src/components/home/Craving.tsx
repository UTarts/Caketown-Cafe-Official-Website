import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@/components/DecorativeGraphics';
import { useCaketown } from '@/context/CaketownStore';

const CONTROLS = {
  imgSizeMobile: 'w-28 h-28',
  imgSizeDesktop: 'lg:w-40 lg:h-40',
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  bgRest: { scale: 1, y: 0 },
  bgHover: { scale: 1.04, y: -10 },
  imgRest: { scale: 1, y: 0, rotate: 0 },
  imgHover: { scale: 1.18, y: -26, rotate: -4 },
};

export function Craving() {
  const { categories } = useCaketown();

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
              WHAT ARE
              <br />
              YOU CRAVING?
            </h2>
          </div>

          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-caketown-black/60 hover:text-caketown-orange transition-colors pb-2"
          >
            Explore all items
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6-Column 3D Pop-Out Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-16 lg:gap-x-6 lg:gap-y-0 mt-12">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              animate="rest"
            >
              <Link
                to={`/menu?cat=${cat.id}`}
                className="relative block pt-12 lg:pt-16 outline-none group"
              >
                {/* 1. Coloured Squarish Pedestal */}
                <motion.div
                  variants={{ rest: CONTROLS.bgRest, hover: CONTROLS.bgHover }}
                  transition={CONTROLS.transition}
                  className="w-full aspect-square rounded-[2rem] flex flex-col items-center justify-end pb-5 lg:pb-7 shadow-lg"
                  style={{ backgroundColor: cat.bgColor }}
                >
                  <h3
                    className="font-display font-bold text-lg lg:text-xl tracking-tight"
                    style={{ color: cat.textColor }}
                  >
                    {cat.label}
                  </h3>
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase opacity-65 mt-0.5"
                    style={{ color: cat.textColor }}
                  >
                    {cat.tag}
                  </span>
                </motion.div>

                {/* 2. Floating Frameless 3D Cutout Image */}
                <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
                  <motion.img
                    variants={{ rest: CONTROLS.imgRest, hover: CONTROLS.imgHover }}
                    transition={CONTROLS.transition}
                    src={cat.image}
                    alt={cat.label}
                    className={`${CONTROLS.imgSizeMobile} ${CONTROLS.imgSizeDesktop} object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.32)] pointer-events-auto`}
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