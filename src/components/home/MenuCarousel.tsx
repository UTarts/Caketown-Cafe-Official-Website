import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from '@/components/DecorativeGraphics';
import { menuItems } from '@/data/menu';
import { Reveal } from '@/components/Reveal';

// Curate exactly 4 items to showcase as "Today's Favourites"
// Using IDs from your new menu data
const curatedIds = ['c5', 'cf1', 'dn2', 'p1']; 
const favourites = curatedIds.map(id => menuItems.find(item => item.id === id)).filter(Boolean) as typeof menuItems;

export function MenuCarousel() {
  return (
    <section className="bg-[#FDFBF7] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <Reveal>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange block mb-4">
                Chef's Selection
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-black tracking-tighter leading-[0.9] text-caketown-black text-[12vw] sm:text-[8vw] lg:text-[5.5rem]">
                TODAY'S <br />
                <span className="font-serif italic font-medium text-caketown-orange tracking-normal lowercase pr-2">favourites.</span>
              </h2>
            </Reveal>
          </div>
          
          <Reveal delay={200}>
            <Link
              to="/menu"
              className="group hidden md:inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-caketown-black/60 hover:text-caketown-orange transition-colors pb-2"
            >
              View Full Menu
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {favourites.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <Link to="/menu" className="group block outline-none">
                
                {/* Framed Square-Cropped Image */}
                <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-sm border border-black/5 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-caketown-orange/0 group-hover:bg-caketown-orange/10 transition-colors duration-500" />
                </div>
                
                {/* Typography */}
                <div className="px-2 text-center sm:text-left">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-caketown-black/40 block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-caketown-black text-lg lg:text-xl leading-tight transition-colors group-hover:text-caketown-orange">
                    {item.name}
                  </h3>
                </div>
                
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Mobile-only CTA */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 rounded-full bg-caketown-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-caketown-orange transition-all duration-300 shadow-lg active:scale-95"
          >
            View Full Menu
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}