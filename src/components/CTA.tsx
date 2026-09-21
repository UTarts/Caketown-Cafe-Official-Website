import { Link } from 'react-router-dom';
import { ArrowRight } from './DecorativeGraphics';

interface CTAProps {
  to: string;
  children: string;
  variant?: 'orange' | 'white' | 'dark' | 'cherry';
  className?: string;
  external?: boolean;
  href?: string;
}

export function CTA({ to, children, variant = 'orange', className = '', external, href }: CTAProps) {
  const baseClasses = 'group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-95';
  
  const variants = {
    orange: 'bg-caketown-orange text-white hover:bg-caketown-orange-dark shadow-lg shadow-caketown-orange/20',
    white: 'bg-white text-caketown-black hover:bg-caketown-cream shadow-lg shadow-black/10',
    dark: 'bg-caketown-black text-white hover:bg-caketown-chocolate shadow-lg shadow-black/20',
    cherry: 'bg-caketown-cherry text-white hover:bg-caketown-cherry/90 shadow-lg shadow-caketown-cherry/20',
  };

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {content}
    </Link>
  );
}
