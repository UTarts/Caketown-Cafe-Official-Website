import { motion } from 'framer-motion';

export function BrandStatement() {
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  return (
    // Reduced vertical padding (py-16 lg:py-28) to tighten the section height
    <section className="relative bg-caketown-black text-white py-12 lg:py-22 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Minimalist Label & Baker Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="w-full lg:w-1/4 flex flex-col"
        >
          <div className="border-t-[1.5px] border-white/20 pt-6 mb-8 lg:mb-12">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-caketown-orange">
              Our Philosophy
            </span>
          </div>
          
          {/* Baker Image with Cinematic Hover Effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.2 }}
            className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[3/4]  overflow-hidden shadow-2xl bg-[#1a1a1a]"
          >
            <img 
              // Pexels placeholder of a baker scoring bread
              src="\bakerr.webp" 
              alt="Baker crafting fresh bread" 
              className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Right Column: Editorial Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...transition, delay: 0.1 }}
          className="w-full lg:w-3/4 lg:pt-6"
        >
          <h2 className="font-display font-black tracking-tightest leading-[0.95] text-5xl sm:text-6xl lg:text-[7rem] mb-10 lg:mb-16">
            MADE FOR <br />
            <span className="font-serif italic font-medium text-[#C59A75] pr-2 tracking-normal">everyday</span> <br />
            MOMENTS.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
            <p className="text-sm lg:text-base text-white/60 max-w-sm leading-relaxed font-medium">
              Whether it’s a quiet morning coffee, a quick afternoon snack, or the grandest of celebrations—we bake to make those moments a little sweeter.
            </p>
            <p className="text-sm lg:text-base text-white/60 max-w-sm leading-relaxed font-medium">
              No shortcuts. No compromises. Just premium ingredients, crafted with passion right here in Pratapgarh.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}