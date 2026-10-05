import { Link } from 'react-router-dom';
import { ArrowRight } from './DecorativeGraphics';
import { Reveal } from './Reveal';

const footerNav = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Locations', path: '/locations' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Offers', path: '/offers' },
  { label: 'Contact', path: '/contact' },
];

// Clean, scalable SVG Icons for the footer
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-caketown-black text-white pt-20 pb-10 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Big headline */}
        <Reveal>
          <h2 className="font-display font-extrabold tracking-tightest leading-[0.9] text-[14vw] sm:text-[10vw] lg:text-[8rem]">
            KEEP THE
            <br />
            GOOD TIMES
            <br />
            <span className="text-caketown-orange">BAKING.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Nav */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-medium text-white/70 hover:text-caketown-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Reach Us
            </p>
            <ul className="space-y-4 text-sm text-white/70">
              <li>Chowk Bajaja · Bhangwa Chungi · Ambedkar Chauraha</li>
              <li>
                <a href="tel:+919918100055" className="hover:text-caketown-orange transition-colors">
                  +91 9918100055 / 57 / 66
                </a>
              </li>
              <li>
                <a href="https://wa.me/919918100055" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 hover:text-caketown-orange transition-colors">
                  <span className="text-white/60 group-hover:text-caketown-orange transition-colors"><WhatsAppIcon /></span>
                  +91 9918100055
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/caketownpbh/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 hover:text-caketown-orange transition-colors">
                  <span className="text-white/60 group-hover:text-caketown-orange transition-colors"><InstagramIcon /></span>
                  @caketownpbh
                </a>
              </li>
            </ul>
          </div>

          {/* Sister brand */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Also From The Group
            </p>
            <div className="flex items-start gap-4 mb-3">
              {/* White circular frame for the logo */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg p-2 mt-1">
                <img 
                  src="/bandhan1.webp" 
                  alt="Bandhan Sweets Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <a 
                  href="https://bandhansweets.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg font-display font-bold text-white hover:text-caketown-orange transition-colors leading-tight"
                >
                  Bandhan Sweets and Restaurant
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a 
                  href="https://www.instagram.com/bandhansweets/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-caketown-orange transition-colors mt-2"
                >
                  <span className="text-white/50 group-hover:text-caketown-orange transition-colors"><InstagramIcon /></span>
                  @bandhansweets
                </a>
              </div>
            </div>
            <p className="text-xs text-white/40 max-w-xs mt-4">
              A separate brand under the same ownership. Distinct flavours, the same commitment.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 pb-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Caketown Cafe. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Made with care. Baked fresh daily.
            </p>
          </div>

          {/* UT Arts Branding */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40">Powered by</span>
            <a href="https://www.utarts.in" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-500 hover:text-orange-700 transition-colors flex items-center gap-1.5">
              <img alt="UT Arts Logo" className="h-6 w-6 rounded-full object-cover border border-gray-200" src="https://www.utarts.in/images/UTArt_Logo.webp" />
              UT Arts
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link" aria-hidden="true">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}