interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Cherry({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 40 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8 C 20 8, 8 18, 12 30" stroke="#4A2418" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M20 8 C 20 8, 32 18, 28 30" stroke="#4A2418" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="34" r="7" fill="#E43838" />
      <circle cx="28" cy="34" r="7" fill="#E43838" />
      <circle cx="10" cy="32" r="2" fill="#FF6B6B" opacity="0.6" />
      <circle cx="26" cy="32" r="2" fill="#FF6B6B" opacity="0.6" />
    </svg>
  );
}

export function CoffeeBean({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 30 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="15" cy="20" rx="10" ry="16" fill="#4A2418" transform="rotate(20 15 20)" />
      <path d="M15 6 C 12 15, 12 25, 15 34" stroke="#2A1408" strokeWidth="2" strokeLinecap="round" fill="none" transform="rotate(20 15 20)" />
    </svg>
  );
}

export function Sparkle({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0 L13.5 9.5 L23 12 L13.5 14.5 L12 24 L10.5 14.5 L1 12 L10.5 9.5 Z" fill="currentColor" />
    </svg>
  );
}

export function Swirl({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 10 C 45 10, 50 20, 45 30 C 42 38, 30 38, 28 30 C 27 25, 32 22, 35 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function ArrowRight({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12 L19 12 M13 6 L19 12 L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CakeIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="30" width="40" height="26" rx="3" fill="currentColor" opacity="0.2" />
      <rect x="12" y="30" width="40" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M12 40 C 18 40, 18 36, 24 36 C 30 36, 30 40, 36 40 C 42 40, 42 36, 48 36" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 50 C 18 50, 18 46, 24 46 C 30 46, 30 50, 36 50 C 42 50, 42 46, 48 46" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="20" r="4" fill="#E43838" />
      <path d="M32 24 L 32 30" stroke="#4A2418" strokeWidth="2" />
    </svg>
  );
}

export function CoffeeCup({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 22 L 48 22 L 45 50 C 45 53, 42 55, 39 55 L 23 55 C 20 55, 17 53, 17 50 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
      <path d="M48 28 C 54 28, 54 38, 48 38" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M22 16 C 22 14, 24 14, 24 12 C 24 10, 22 10, 22 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M32 16 C 32 14, 34 14, 34 12 C 34 10, 32 10, 32 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M42 16 C 42 14, 44 14, 44 12 C 44 10, 42 10, 42 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Sprinkles({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 80 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="12" height="3" rx="1.5" fill="#F47A1F" transform="rotate(25 14 11.5)" />
      <rect x="28" y="6" width="12" height="3" rx="1.5" fill="#E43838" transform="rotate(-15 34 7.5)" />
      <rect x="48" y="14" width="12" height="3" rx="1.5" fill="#4A2418" transform="rotate(40 54 15.5)" />
      <rect x="18" y="26" width="12" height="3" rx="1.5" fill="#E43838" transform="rotate(-30 24 27.5)" />
      <rect x="42" y="28" width="12" height="3" rx="1.5" fill="#F47A1F" transform="rotate(20 48 29.5)" />
      <rect x="62" y="22" width="12" height="3" rx="1.5" fill="#4A2418" transform="rotate(-45 68 23.5)" />
    </svg>
  );
}

// --- Category SVG icons ---

export function CakeSliceIcon({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30 L 38 30 L 34 38 L 14 38 Z" fill="currentColor" opacity="0.2" />
      <path d="M10 30 L 38 30 L 34 38 L 14 38 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 30 L 24 12 L 38 30" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
      <circle cx="24" cy="12" r="2.5" fill="#E43838" />
      <path d="M24 14.5 L 24 30" stroke="#4A2418" strokeWidth="1.5" />
    </svg>
  );
}

export function CroissantIcon({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 30 C 6 20, 14 12, 24 12 C 34 12, 42 20, 40 30 C 38 28, 34 26, 30 27 C 26 28, 22 28, 18 27 C 14 26, 10 28, 8 30 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 22 C 16 20, 18 20, 20 22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M24 18 C 26 16, 28 16, 30 18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function DessertCupIcon({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 16 L 34 16 L 30 36 C 30 38, 28 39, 26 39 L 22 39 C 20 39, 18 38, 18 36 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 22 C 20 20, 24 22, 28 20 C 30 19, 32 20, 33 22" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="13" r="2" fill="#E43838" />
    </svg>
  );
}

export function CoffeeCupIcon({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 18 L 34 18 L 31 36 C 31 38, 29 39, 27 39 L 19 39 C 17 39, 15 38, 15 36 Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M34 22 C 38 22, 38 28, 34 28" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M18 12 C 18 11, 19 11, 19 10 C 19 9, 18 9, 18 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M24 12 C 24 11, 25 11, 25 10 C 25 9, 24 9, 24 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M30 12 C 30 11, 31 11, 31 10 C 31 9, 30 9, 30 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function CookieIcon({ className = '', style }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="16" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="20" r="2" fill="#4A2418" />
      <circle cx="26" cy="18" r="2" fill="#F47A1F" />
      <circle cx="29" cy="27" r="2" fill="#4A2418" />
      <circle cx="20" cy="29" r="2" fill="#E43838" />
      <path d="M14 24 C 14 18, 18 14, 24 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
