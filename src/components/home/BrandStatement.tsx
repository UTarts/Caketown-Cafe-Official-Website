import { Reveal } from '@/components/Reveal';
import { CakeIcon } from '@/components/DecorativeGraphics';

export function BrandStatement() {
  return (
    <section className="relative bg-caketown-black text-white py-24 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-12 overflow-hidden">
      {/* Oversized decorative graphic */}
      <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
        <CakeIcon className="w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] text-caketown-orange" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-6">
            What we believe
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-[14vw] sm:text-[10vw] lg:text-[8rem]">
            MADE FOR
            <br />
            <span className="text-caketown-orange">MOMENTS.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-base sm:text-lg text-white/60 max-w-md">
            Celebrations, cravings, coffee runs and everything in between.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
