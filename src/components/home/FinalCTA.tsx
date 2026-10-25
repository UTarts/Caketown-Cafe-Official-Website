import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative bg-[#111111] text-white py-28 sm:py-36 lg:py-44 px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-white/12">
      {/* Subtle Architectural Grid Lines */}
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.32em] uppercase text-[#F47A1F] mb-6">
            THE DOOR IS OPEN
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display font-extrabold tracking-tightest leading-[0.85] text-[20vw] sm:text-[16vw] lg:text-[12rem] select-none">
            COME
            <br />
            <span className="text-[#F47A1F]">HUNGRY.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-lg font-display tracking-[0.32em] uppercase mt-12">
            LEAVE WITH A REASON TO <span className="font-extrabold text-[#F47A1F]">COME BACK.</span>
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 bg-[#F47A1F] text-white px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] hover:bg-white hover:text-[#111111] transition-colors rounded-none"
            >
              <span>Explore Menu</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/locations"
              className="group inline-flex items-center gap-3 bg-white text-[#111111] px-9 py-4 text-xs font-bold uppercase tracking-[0.22em] hover:bg-[#F47A1F] hover:text-white transition-colors rounded-none"
            >
              <span>Visit Us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}