import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function MenuCarousel() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 28 });

  // Subtle vertical counter-shift on scroll
  const imgZoom = useTransform(smoothScroll, [0, 1], [1.02, 1.12]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFF7EE] text-[#111111] py-20 lg:py-28 px-5 sm:px-8 lg:px-12 border-t border-[#111111]/12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric 12-Column Sharp Bento Grid (Zero Menu Lists!) */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[120px] sm:auto-rows-[250px] gap-3.5 sm:gap-4">
          
          {/* BENTO TILE 1 (Top-Left, Tall Portrait: Spans 4 cols, 2 rows) */}
          <div className="md:col-span-4 md:row-span-2 relative overflow-hidden bg-[#111111] border border-[#111111]/15 group">
            <motion.img
              style={{ scale: imgZoom }}
              src="/5.webp"
              alt="Caketown Signature Truffle Cake"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute top-3 left-3 bg-[#111111] text-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em]">
              01 / CAKES
            </span>
          </div>

          {/* BENTO TILE 2 (Top-Center, Wide Landscape: Spans 5 cols, 1 row) */}
          <div className="md:col-span-5 md:row-span-1 relative overflow-hidden bg-white border border-[#111111]/15 group">
            <img
              src="/Cappuccino (1).webp"
              alt="Freshly Brewed Cappuccino"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-3 left-3 bg-[#111111] text-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em]">
              02 / ESPRESSO
            </span>
          </div>

          {/* BENTO TILE 3 (Top-Right, Square: Spans 3 cols, 1 row) */}
          <div className="md:col-span-3 md:row-span-1 relative overflow-hidden bg-white border border-[#111111]/15 group">
            <img
              src="/StrawberryShake.webp"
              alt="Strawberry Milkshake"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-3 left-3 bg-[#111111] text-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em]">
              03 / SHAKES
            </span>
          </div>

          {/* ================================================================
              BENTO TILE 4 (MIDDLE EDITORIAL TEXT BLOCK: Spans 4 cols, 1 row)
              Sits right in the center of the Bento Grid!
          ================================================================ */}
          <div className="md:col-span-4 md:row-span-1 bg-[#111111] text-white p-6 sm:p-8 flex flex-col justify-between border border-[#111111]">
            <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#F47A1F]">
              CAKETOWN MOMENTS
            </span>
            <h2 className="font-display font-black tracking-tightest leading-[0.9] text-3xl sm:text-4xl uppercase">
              BAKED FOR <br />
              <span className="text-[#F47A1F]">GOOD TIMES.</span>
            </h2>
            <p className="text-[11px] text-white/60 uppercase tracking-[0.18em] font-semibold">
              CHOWK BAJAJA • BHANGWA CHUNGI
            </p>
          </div>

          {/* BENTO TILE 5 (Middle-Right, Tall Portrait: Spans 4 cols, 2 rows) */}
          <div className="md:col-span-4 md:row-span-2 relative overflow-hidden bg-[#111111] border border-[#111111]/15 group">
            <motion.img
              style={{ scale: imgZoom }}
              src="/2.webp"
              alt="Red Velvet Celebration Cake"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute top-3 left-3 bg-[#111111] text-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em]">
              04 / CELEBRATIONS
            </span>
          </div>

          {/* BENTO TILE 6 (Bottom-Left, Wide Video / Motion Window: Spans 5 cols, 1 row) */}
          <div className="md:col-span-5 md:row-span-1 relative overflow-hidden bg-[#111111] border border-[#111111]/15 group">
            <video
              src="/bakery.webm"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <span className="absolute bottom-3 left-3 bg-[#111111]/90 text-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em]">
              LIVE FROM OUR KITCHEN
            </span>
          </div>

          {/* BENTO TILE 7 (Bottom-Center, Corner Action & Pastry Tile: Spans 3 cols, 1 row) */}
          <Link
            to="/menu"
            className="md:col-span-3 md:row-span-1 relative overflow-hidden bg-[#F47A1F] text-white p-6 flex flex-col justify-between group border border-[#111111]/15 hover:bg-[#111111] transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase">
                FULL COUNTER
              </span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase leading-none">
                EXPLORE <br />
                ALL 44+ <br />
                CREATIONS.
              </h3>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}