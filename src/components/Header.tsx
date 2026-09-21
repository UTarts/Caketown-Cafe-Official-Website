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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(255, 247, 238, 0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(17, 17, 17, 0.06)' : '1px solid transparent',
        }}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4">
          
          {/* Logo Replacement */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.webp" 
              alt="Caketown Cafe" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-caketown-orange'
                    : 'text-caketown-black/70 hover:text-caketown-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm font-semibold text-caketown-black/50 hover:text-caketown-orange transition-colors duration-200"
            >
              Bandhan Sweets
            </Link>
          </nav>

          {/* Cleaned Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-caketown-black text-white px-6 py-2.5 text-sm font-semibold hover:bg-caketown-orange transition-all duration-300 active:scale-95"
          >
            Enquire
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-caketown-black rounded-full" />
            <span className="w-6 h-0.5 bg-caketown-black rounded-full" />
            <span className="w-4 h-0.5 bg-caketown-black rounded-full" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </>
  );
}