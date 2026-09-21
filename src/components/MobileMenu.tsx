import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface NavLink {
  label: string;
  path: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export function MobileMenu({ open, onClose, navLinks }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-caketown-black transition-opacity duration-400 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4">
            <span className="text-lg font-display font-extrabold tracking-tightest text-white">
              CAKETOWN
              <span className="text-[10px] font-semibold tracking-[0.2em] text-caketown-orange uppercase ml-2">
                Cafe
              </span>
            </span>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-5 gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className="group flex items-baseline gap-4 py-2 transition-all duration-300"
                style={{
                  transform: open ? 'translateX(0)' : 'translateX(-30px)',
                  opacity: open ? 1 : 0,
                  transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms, opacity 0.5s ease ${i * 60}ms`,
                }}
              >
                <span className="text-xs font-display font-semibold text-caketown-orange/60 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-3xl font-display font-bold text-white group-hover:text-caketown-orange group-active:scale-95 transition-all duration-200">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom links */}
          <div className="px-5 pb-10 space-y-4">
            <div className="h-px bg-white/10" />
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-between text-sm font-medium text-white/60 hover:text-caketown-orange transition-colors"
            >
              <span>Bandhan Sweets</span>
              <span>→</span>
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-between text-sm font-medium text-white/60 hover:text-caketown-orange transition-colors"
            >
              <span>Order / Enquire</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
