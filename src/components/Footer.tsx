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
            <ul className="space-y-3 text-sm text-white/70">
              <li>Chowk Bajaja · Bhangwa Chungi · Ambedkar Chauraha</li>
              <li>
                <a href="tel:+91" className="hover:text-caketown-orange transition-colors">
                  +91 [phone]
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-caketown-orange transition-colors">
                  @caketowncafe
                </a>
              </li>
              <li>
                <a href="https://wa.me/91" target="_blank" rel="noopener noreferrer" className="hover:text-caketown-orange transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Sister brand */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Also From The Group
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-lg font-display font-bold text-white hover:text-caketown-orange transition-colors"
            >
              Bandhan Sweets
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-white/40 mt-2 max-w-xs">
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
