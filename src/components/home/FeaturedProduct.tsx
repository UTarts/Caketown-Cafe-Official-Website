import { Reveal } from '@/components/Reveal';
import { CTA } from '@/components/CTA';
import { OrganicShape } from '@/components/OrganicShape';

export function FeaturedProduct() {
  return (
    <section className="relative bg-white py-16 sm:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
                Signature
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[16vw] sm:text-[10vw] lg:text-[7.5rem]">
                SOMETHING <br />
                <span className="font-serif italic font-medium text-caketown-cherry tracking-normal lowercase">sweet?</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-sm sm:text-base text-caketown-black/60 max-w-sm mx-auto lg:mx-0 font-medium">
                Every cake is baked in-house, every dessert plated with care. Find your next favourite centerpiece.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex justify-center lg:justify-start">
                <CTA to="/menu" variant="orange">View Menu</CTA>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] max-w-[400px] max-h-[400px]">
                <OrganicShape variant="blob1" color="#FFDCCB" className="w-full h-full" />
              </div>
            </div>
            <Reveal delay={100} y={30}>
              <div className="relative z-10">
                {/* Max sizes constrained to prevent UI break */}
                <img
                  src="https://images.pexels.com/photos/18160775/pexels-photo-18160775.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                  alt="Elegant pink strawberry cake slice with fresh fruit"
                  loading="lazy"
                  className="w-[65vw] h-[65vw] max-w-[380px] max-h-[380px] object-cover rounded-[2rem] shadow-2xl shadow-caketown-chocolate/15"
                  style={{ transform: 'rotate(-2deg)' }}
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}