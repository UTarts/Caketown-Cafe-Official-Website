import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Locations', path: '/locations' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Offers', path: '/offers' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isAtTop = isHomePage && !scrolled;
  const textColor = isAtTop ? 'text-white' : 'text-caketown-black';

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: scrolled ? 'rgba(255, 247, 238, 0.84)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(17, 17, 17, 0.06)' : '1px solid transparent',
        }}
      >
        <div 
          // Added gap-8 here to permanently prevent the logo and nav from colliding
          className={`mx-auto w-full flex items-center justify-between gap-7 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isAtTop 
              ? 'max-w-[1000px] px-4 py-8 lg:py-10' 
              : 'max-w-[1440px] px-2 sm:px-4 lg:px-16 py-4' 
          }`}
        >
          
          {/* Caketown Logo (Dynamically swaps between white and standard) */}
          <Link to="/" className="flex items-center group shrink-0 ml-0"> {/* Add ml-4 or adjust as needed */}
            <img 
              src={isAtTop ? "/logo2.webp" : "/logo.webp"} 
              alt="Caketown Cafe" 
              className={`w-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
                isAtTop ? 'h-12 lg:h-14' : 'h-10'
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center transition-all duration-700 ease-in-out ${isAtTop ? 'gap-10' : 'gap-7'}`}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-all duration-500 whitespace-nowrap ${
                    isActive
                      ? 'text-caketown-orange'
                      : `${isAtTop ? 'text-white/90 hover:text-white' : 'text-caketown-black/70 hover:text-caketown-black'}`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Bandhan Sweets Logo */}
            <a
              href="https://bandhansweets.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 border-l pl-6 ml-2 transition-all duration-700 ${
                isAtTop ? 'border-white/30 opacity-100 hover:opacity-80' : 'border-caketown-black/15 opacity-80 hover:opacity-100'
              }`}
            >
              <img 
                src="/bandhan1.webp" 
                alt="Bandhan Sweets" 
                className={`w-auto object-contain drop-shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isAtTop ? 'h-14 lg:h-16' : 'h-11'
                }`}
              />
            </a>
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className={`hidden lg:inline-flex shrink-0 items-center gap-2 rounded-full font-bold tracking-widest uppercase transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-95 whitespace-nowrap ${
              isAtTop
                ? 'bg-white text-caketown-black hover:bg-caketown-orange hover:text-white px-8 py-3 text-[12px] shadow-lg'
                : 'bg-caketown-black text-white hover:bg-caketown-orange px-6 py-2.5 text-[12px]'
            }`}
          >
            Start Order
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden flex flex-col gap-1.5 p-2 -mr-2 ${textColor}`}
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-current rounded-full" />
            <span className="w-6 h-0.5 bg-current rounded-full" />
            <span className="w-4 h-0.5 bg-current rounded-full" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </>
  );
}