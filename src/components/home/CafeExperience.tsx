import { useRef, useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';

export function CafeExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = 1 - rect.top / windowHeight;
        setZoom(1 + Math.min(progress * 0.12, 0.12));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-caketown-black text-white py-0 overflow-hidden">
      <div ref={ref} className="relative h-[80vh] sm:h-[90vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/33313218/pexels-photo-33313218.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800"
          alt="Charming cafe interior with pastries and drinks on display"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `scale(${zoom})`, transition: 'transform 0.1s linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-caketown-black via-caketown-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedHeading
              lines={['COME FOR', 'THE CAKE.', 'STAY FOR', 'THE MOMENT.']}
              className="font-display font-extrabold tracking-tightest leading-[0.9] text-[10vw] sm:text-[7vw] lg:text-[5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
