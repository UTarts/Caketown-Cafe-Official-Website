import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { useCaketown } from '@/context/CaketownStore';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export function LocationsScene() {
  const { locationsList } = useCaketown();
  const [activeId, setActiveId] = useState(locationsList[0]?.id || 'chowk-bajaja');
  const active = locationsList.find((l) => l.id === activeId) ?? locationsList[0];

  if (!active) return null;

  return (
    <section className="bg-caketown-cream py-24 sm:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-3">
                3 Outlets in Pratapgarh
              </p>
            </Reveal>
            <AnimatedHeading
              lines={['FIND YOUR', 'CAKETOWN.']}
              className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[13vw] sm:text-[9vw] lg:text-[6rem]"
            />
          </div>

          {/* Horizontal Outlet Switcher Pills */}
          <div className="flex flex-wrap gap-2.5">
            {locationsList.map((loc) => {
              const isSelected = active.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className={`px-6 py-3  text-xs font-display font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                    isSelected
                      ? 'bg-caketown-black text-white shadow-lg scale-105'
                      : 'bg-white text-caketown-black/70 hover:bg-caketown-black/5'
                  }`}
                >
                  {loc.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sleek Split Outlet Showcase Card */}
        <div className="bg-white overflow-hidden shadow-xl border border-black/5 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative h-[280px] sm:h-[420px] overflow-hidden">
            <img
              src={active.image}
              alt={active.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-5 left-5">
              <span className="px-4 py-1.5 rounded-full bg-caketown-orange text-white text-xs font-bold tracking-widest uppercase shadow-md">
                {active.area}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-white">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-caketown-orange block mb-2">
                CAKETOWN CAFE OUTLET
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-caketown-black mb-6">
                {active.name}
              </h3>

              <div className="space-y-4 text-sm text-caketown-black/75">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-caketown-orange" />
                  <span>{active.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0 text-caketown-orange" />
                  <span>{active.hours}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-caketown-orange" />
                  <span>{active.phone}</span>
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-black/10 flex flex-wrap gap-3">
              <a
                href={active.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-caketown-black text-white px-7 py-3.5 text-xs font-bold tracking-[0.18em] uppercase hover:bg-caketown-orange transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}