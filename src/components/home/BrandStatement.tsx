import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const kineticX = useTransform(smoothScroll, [0, 1], ['8%', '-22%']);
  const imageParallaxY = useTransform(smoothScroll, [0, 1], [-25, 25]);

  const PILLARS = [
    {
      num: '01',
      title: 'BAKED FRESH DAILY',
      detail: 'Small-batch sponges, pastries, and donuts baked every morning.',
    },
    {
      num: '02',
      title: 'PURE INGREDIENTS',
      detail: 'Belgian dark cocoa, fresh dairy cream, and real fruit compotes.',
    },
    {
      num: '03',
      title: 'ROASTED ARABICA',
      detail: 'Specialty espresso shots, silky lattes, and thick ice-blended shakes.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111111] text-white border-y border-white/12 overflow-hidden"
    >
    

      {/* Main Sharp Architectural Grid */}
      <div className="max-w-7xl mx-auto border-x border-white/12">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Parallax Baker Visual */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/12 relative overflow-hidden min-h-[340px] sm:min-h-[460px] bg-black">
            <motion.img
              style={{ y: imageParallaxY, scale: 1.12 }}
              src="/bakerr.webp"
              alt="Caketown Baker"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#111111] border border-white/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-[#F47A1F]">
              OUR PHILOSOPHY
            </div>
          </div>

          {/* Right Column: Clean Statement + 3 Sharp Spec Cells */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-7 sm:p-12 lg:p-16">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F47A1F] block mb-4">
                CRAFT &amp; STANDARDS
              </span>

              <h2 className="font-display font-black tracking-tightest leading-[0.9] text-4xl sm:text-6xl lg:text-[4.5rem] uppercase text-white">
                FRESH OUT OF <br />
                THE OVEN. <br />
                <span className="text-[#F47A1F]">NEVER ORDINARY.</span>
              </h2>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <p className="text-xs sm:text-sm text-white/65 max-w-md leading-relaxed">
                  From quiet morning coffees to milestone birthday cakes, every recipe is built from
                  scratch in our Pratapgarh kitchen.
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#111111] hover:bg-[#F47A1F] hover:text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-colors shrink-0 self-start rounded-none"
                >
                  <span>Our Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bottom 3-Column Sharp Spec Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/12">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.num}
                  className="p-6 sm:p-7 border-b sm:border-b-0 sm:border-r border-white/12 last:border-b-0 last:border-r-0 hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-xs font-bold tracking-[0.25em] text-[#F47A1F] block mb-2">
                    {pillar.num}
                  </span>
                  <h3 className="font-display font-extrabold text-sm sm:text-base uppercase text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-white/55 mt-1.5 leading-relaxed">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}