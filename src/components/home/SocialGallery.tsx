import { Reveal } from '@/components/Reveal';
import { galleryImages } from '@/data/gallery';

export function SocialGallery() {
  const feedImages = galleryImages.slice(0, 8);

  return (
    <section className="bg-white py-16 sm:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-caketown-orange mb-4">
              Follow the feed
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-caketown-black text-[14vw] sm:text-[10vw] lg:text-[6.5rem]">
              SEE WHAT'S <br />
              <span className="font-display font-extrabold tracking-tightest italic leading-[0.9] text-caketown-orange text-[14vw] sm:text-[10vw] lg:text-[6.5rem]">BAKING.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
          {feedImages.map((img, i) => {
            const rotations = ['-2deg', '1deg', '-1deg', '2deg', '-1.5deg', '1.5deg', '-2deg', '1deg'];
            return (
              <Reveal key={img.id} delay={i * 60}>
                <a
                  href="https://instagram.com/caketownpbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square group active:scale-95 transition-all duration-300 shadow-sm"
                  style={{ transform: `rotate(${rotations[i % rotations.length]})` }}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-caketown-black/0 group-hover:bg-caketown-orange/20 transition-colors duration-300" />
                </a>
              </Reveal>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com/caketownpbh"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-caketown-black text-white px-8 py-3.5 text-sm font-semibold hover:bg-[#C59A75] transition-all duration-300 active:scale-95 shadow-lg"
          >
            Follow Caketown
          </a>
        </div>

      </div>
    </section>
  );
}