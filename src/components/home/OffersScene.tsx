import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { CTA } from '@/components/CTA';
import { offers } from '@/data/offers';

export function OffersScene() {
  return (
    <section className="bg-caketown-cream py-24 sm:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
              Latest from Caketown
            </p>
          </Reveal>
          <AnimatedHeading
            lines={["WHAT'S", 'HAPPENING?']}
            className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[14vw] sm:text-[10vw] lg:text-[7rem]"
          />
        </div>

        {/* Offer cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {offers.map((offer, i) => (
            <Reveal key={offer.id} delay={i * 80}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] active:scale-[0.98] transition-all duration-300">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-caketown-black/90 via-caketown-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-caketown-orange text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {offer.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-caketown-orange mb-1">
                    {offer.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-1">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-white/70 max-w-xs">
                    {offer.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTA to="/offers" variant="dark">
            See All Offers
          </CTA>
        </div>
      </div>
    </section>
  );
}
