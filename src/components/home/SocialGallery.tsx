import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { galleryImages } from '@/data/gallery';

export function SocialGallery() {
  const feedImages = galleryImages.slice(0, 8);

  return (
    <section className="bg-white py-24 sm:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
              Follow the feed
            </p>
          </Reveal>
          <AnimatedHeading
            lines={["SEE WHAT'S", 'BAKING.']}
            className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[14vw] sm:text-[10vw] lg:text-[7rem]"
          />
        </div>

        {/* Collage grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
          {feedImages.map((img, i) => {
            const rotations = ['-2deg', '1deg', '-1deg', '2deg', '-1.5deg', '1.5deg', '-2deg', '1deg'];
            return (
              <Reveal key={img.id} delay={i * 60}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square group active:scale-95 transition-all duration-300"
                  style={{ transform: `rotate(${rotations[i % rotations.length]})` }}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-caketown-black/0 group-hover:bg-caketown-black/20 transition-colors duration-300" />
                </a>
              </Reveal>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-caketown-black text-white px-7 py-3.5 text-sm font-semibold hover:bg-caketown-orange transition-all duration-300 active:scale-95"
          >
            Follow Caketown
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
