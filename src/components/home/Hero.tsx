import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@/components/DecorativeGraphics';

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallax = scrollY * 0.12;

  return (
    // Changed to min-h-[85svh] and adjusted padding to remove huge gaps
    <section className="relative min-h-[85svh] flex items-center overflow-hidden bg-caketown-cream pt-6">
      
      {/* Straight orange/cream vertical split */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Extended height to stop scroll gaps, reduced width to 38% */}
        <div
          className="absolute -top-[10vh] right-0 h-[180vh]"
          style={{
            width: loaded ? '36%' : '0%',
            transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          <div className="w-full h-full bg-caketown-orange" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center">
          
          {/* Left: Typography */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div
              className="mb-4"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(15px)',
                transition: 'all 0.5s ease 0.2s',
              }}
            >
              <span className="text-[11px] font-display font-semibold tracking-[0.25em] uppercase text-caketown-orange">
                Caketown Cafe
              </span>
            </div>

            <h1 className="font-display font-extrabold tracking-tightest leading-[0.92] text-caketown-black text-[15vw] sm:text-[10vw] lg:text-[5.5rem] xl:text-[6rem] max-w-[520px] mx-auto lg:mx-0">
              {['CAKE.', 'COFFEE.', 'GOOD TIMES.'].map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1">
                  <span
                    className={`block ${i === 2 ? 'text-caketown-orange' : ''}`}
                    style={{
                      transform: loaded ? 'translateY(0)' : 'translateY(110%)',
                      transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.35 + i * 0.12}s`,
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className="mt-5 text-sm text-caketown-black/60 max-w-[320px] mx-auto lg:mx-0"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.5s ease 0.75s',
              }}
            >
              Cakes, pastries, desserts and coffee — baked fresh, served with a smile.
            </p>

            <div
              className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.5s ease 0.9s',
              }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 rounded-full bg-caketown-black text-white px-6 py-3 text-sm font-semibold hover:bg-caketown-chocolate transition-all duration-300 active:scale-95"
              >
                Explore Menu
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-transparent text-caketown-black px-6 py-3 text-sm font-semibold border border-caketown-black/15 hover:border-caketown-black/30 transition-all duration-300 active:scale-95"
              >
                Start Order
              </Link>
            </div>
          </div>

          {/* Right: Food image - Resized, frameless, and pointing to local webp */}
          <div
            className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end min-h-[30vh] lg:min-h-[50vh]"
            style={{
              transform: `translateY(${-parallax * 0.3}px)`,
            }}
            >
              <div
                className="relative"
                style={{
                  transform: loaded ? 'translateX(0) scale(1)' : 'translateX(100px) scale(0.96)',
                  opacity: loaded ? 1 : 0,
                  transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, opacity 0.6s ease 0.3s', // Adjusted opacity transition
                }}
              >
                <img
                  src="/hero.webp"
                  alt="Caketown Cafe Specialties"
                  className="object-contain transition-transform duration-500 hover:scale-[1.03]"
                  fetchPriority="high"
                  style={{
                    transform: `translateX(${-parallax * 0.15 - 140}px)`,
                    width: '400px', // Set exact width
                    maxWidth: '400px', // Set maximum width
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}