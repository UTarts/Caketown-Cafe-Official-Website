import { useEffect, useRef, useState, type ReactNode } from 'react';

interface SceneProps {
  children: ReactNode;
  z?: number;
  className?: string;
  overlap?: boolean; // Control if this section overlaps
  speed?: number;    // Control the speed of the overlap
}

export function Scene({ children, z = 1, className = '', overlap = true, speed = 0.15 }: SceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < -100 || rect.top > windowHeight + 100) {
        setVisible(false);
        return;
      }
      setVisible(true);

      // If overlap is true, apply the downward shift to the previous section
      if (overlap && rect.top < 0 && rect.bottom > 0) {
        const progress = Math.min(Math.abs(rect.top) / windowHeight, 1);
        setOffset(-progress * windowHeight * (speed * 0.5));
      } else {
        setOffset(0);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [overlap, speed]); // Re-run if props change

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        zIndex: z,
        transform: visible ? `translateY(${-offset}px)` : 'translateY(0)',
        willChange: visible ? 'transform' : 'auto',
        transition: 'transform 0.1s linear',
      }}
    >
      {children}
    </div>
  );
}