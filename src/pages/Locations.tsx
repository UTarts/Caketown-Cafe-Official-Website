import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { locations } from '@/data/locations';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export function Locations() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const active = locations.find((l) => l.id === activeId) ?? locations[0];

  useEffect(() => {
    document.title = 'Caketown Cafe Locations';
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-caketown-cream pt-28 pb-16 px-5 sm:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
              Our Locations
            </p>
          </Reveal>
          <AnimatedHeading
            lines={['FIND YOUR', 'CAKETOWN.']}
            className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[14vw] sm:text-[10vw] lg:text-[7rem]"
          />
        </div>
      </section>

      {/* Location selector */}
      <section className="bg-white py-12 sm:py-16 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Location list */}
            <div className="space-y-3">
              {locations.map((loc, i) => (
                <Reveal key={loc.id} delay={i * 80}>
                  <button
                    onClick={() => setActiveId(loc.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 active:scale-[0.98] ${
                      activeId === loc.id
                        ? 'bg-caketown-black text-white'
                        : 'bg-caketown-cream text-caketown-black hover:bg-caketown-peach/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-display font-bold">
                          {loc.name}
                        </h3>
                        <p className={`text-sm mt-1 ${activeId === loc.id ? 'text-white/50' : 'text-caketown-black/50'}`}>
                          {loc.area}
                        </p>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeId === loc.id
                            ? 'bg-caketown-orange scale-125'
                            : 'bg-caketown-black/15'
                        }`}
                      />
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>

            {/* Detail card */}
            <Reveal delay={100}>
              <div className="lg:sticky lg:top-24 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={active.image}
                  alt={active.name}
                  loading="lazy"
                  className="w-full h-[280px] sm:h-[350px] object-cover"
                />
                <div className="p-6 sm:p-8 bg-caketown-cream">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-caketown-black mb-4">
                    {active.name}
                  </h3>
                  <div className="space-y-3 text-sm text-caketown-black/70">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-caketown-orange" />
                      {active.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0 text-caketown-orange" />
                      {active.hours}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 flex-shrink-0 text-caketown-orange" />
                      {active.phone}
                    </p>
                  </div>
                  <a
                    href={active.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 rounded-full bg-caketown-orange text-white px-6 py-3 text-sm font-semibold hover:bg-caketown-orange-dark transition-all duration-300 active:scale-95"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
