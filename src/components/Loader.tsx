import { useEffect, useState } from 'react';

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-caketown-cream transition-opacity duration-500"
      style={{
        opacity: done ? 0 : 1,
        pointerEvents: done ? 'none' : 'auto',
      }}
    >
      <div className="text-center">
        <div className="overflow-hidden">
          <span
            className="block text-2xl sm:text-3xl font-display font-extrabold tracking-tightest text-caketown-black"
            style={{
              transform: done ? 'translateY(0)' : 'translateY(110%)',
              opacity: done ? 0 : 1,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
            }}
          >
            CAKETOWN
          </span>
        </div>
        <div className="mt-3 mx-auto h-0.5 w-16 bg-caketown-orange overflow-hidden">
          <div
            className="h-full bg-caketown-orange/30 origin-left"
            style={{
              transform: 'scaleX(1)',
              transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
