import { Reveal } from '@/components/Reveal';
import { CTA } from '@/components/CTA';
import { OrganicShape } from '@/components/OrganicShape';

export function FeaturedProduct() {
  return (
    <section className="relative bg-white py-24 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
                Signature
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[16vw] sm:text-[12vw] lg:text-[8rem]">
                SOMETHING
                <br />
                <span className="text-caketown-cherry">SWEET?</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-sm sm:text-base text-caketown-black/60 max-w-sm mx-auto lg:mx-0">
                Every cake is baked in-house, every dessert plated with care. Find your next favourite.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex justify-center lg:justify-start">
                <CTA to="/menu" variant="orange">
                  View Menu
                </CTA>
              </div>
            </Reveal>
          </div>

          {/* Image with organic shape */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            {/* Organic shape behind */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] max-w-[450px] max-h-[450px]">
                <OrganicShape
                  variant="blob1"
                  color="#FFDCCB"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Food image breaking out */}
            <Reveal delay={100} y={40}>
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/18160775/pexels-photo-18160775.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                  alt="Elegant pink strawberry cake slice with fresh fruit"
                  loading="lazy"
                  className="w-[70vw] h-[70vw] max-w-[420px] max-h-[420px] object-cover rounded-[2rem] shadow-2xl shadow-caketown-chocolate/20"
                  style={{ transform: 'rotate(-3deg)' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
