import { Reveal } from '@/components/Reveal';
import { CTA } from '@/components/CTA';

export function FinalCTA() {
  return (
    <section className="relative bg-caketown-black text-white py-24 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-12 overflow-hidden">
      {/* Decorative shape */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M 50,2 C 75,2 98,22 98,48 C 98,72 82,98 52,98 C 28,98 2,82 2,52 C 2,26 22,2 50,2 Z"
            fill="#F47A1F"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-6">
            The door is open
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display font-extrabold tracking-tightest leading-[0.85] text-[20vw] sm:text-[16vw] lg:text-[12rem]">
            COME
            <br />
            <span className="text-caketown-orange">HUNGRY.</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <CTA to="/menu" variant="orange">
              Explore Menu
            </CTA>
            <CTA to="/contact" variant="white">
              Visit Us
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
