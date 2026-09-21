import { useEffect } from 'react';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { CTA } from '@/components/CTA';

export function About() {
  useEffect(() => {
    document.title = 'About Caketown Cafe';
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-caketown-cream pt-28 pb-20 sm:pb-28 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
              About Us
            </p>
          </Reveal>
          <AnimatedHeading
            lines={['MORE THAN', 'JUST CAKE.']}
            className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[14vw] sm:text-[10vw] lg:text-[7rem]"
          />
          <Reveal delay={200}>
            <p className="mt-8 text-base sm:text-lg text-caketown-black/60 max-w-lg">
              Caketown Cafe is a modern bakery and cafe where cakes, coffee and good times come together. Built for celebrations, cravings and everyday joy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we love */}
      <section className="bg-caketown-black text-white py-20 sm:py-28 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/5257641/pexels-photo-5257641.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200"
              alt="Friends sharing cake and tea together"
              loading="lazy"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-3xl"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
                What we love
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-3xl sm:text-4xl lg:text-5xl mb-4">
                Moments made
                <br />
                <span className="text-caketown-orange">sweeter.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-white/60 text-sm sm:text-base">
                From the first cup of coffee to the last slice of cake, we believe every visit should feel like a small celebration.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we serve */}
      <section className="bg-caketown-cream py-20 sm:py-28 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
              What we serve
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-3xl sm:text-4xl lg:text-5xl mb-12">
              FRESHLY BAKED,
              <br />
              EVERY DAY.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Cakes', img: 'https://images.pexels.com/photos/28402363/pexels-photo-28402363.jpeg?auto=compress&cs=tinysrgb&h=400&w=400' },
              { label: 'Pastries', img: 'https://images.pexels.com/photos/14122678/pexels-photo-14122678.jpeg?auto=compress&cs=tinysrgb&h=400&w=400' },
              { label: 'Desserts', img: 'https://images.pexels.com/photos/37418881/pexels-photo-37418881.jpeg?auto=compress&cs=tinysrgb&h=400&w=400' },
              { label: 'Coffee', img: 'https://images.pexels.com/photos/15801079/pexels-photo-15801079.jpeg?auto=compress&cs=tinysrgb&h=400&w=400' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="group relative rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={item.img}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-caketown-black/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-display font-bold text-white">
                    {item.label}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="bg-white py-20 sm:py-28 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
              What makes Caketown different
            </p>
          </Reveal>
          <AnimatedHeading
            lines={['BOLD IN', 'FLAVOUR.']}
            className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[12vw] sm:text-[8vw] lg:text-[6rem] mb-8"
          />
          <Reveal delay={120}>
            <p className="text-base sm:text-lg text-caketown-black/60 max-w-lg mx-auto">
              A modern cafe experience designed for everyone — teenagers, families, and anyone who loves great food.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10">
              <CTA to="/menu" variant="orange">
                Explore Menu
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
