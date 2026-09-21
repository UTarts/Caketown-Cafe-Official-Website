import { useEffect, useRef, useState } from 'react';

interface AnimatedHeadingProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
}

export function AnimatedHeading({
  lines,
  className = '',
  lineClassName = '',
  stagger = 120,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`block overflow-hidden ${lineClassName}`}
        >
          <span
            className="block"
            style={{
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              opacity: visible ? 1 : 0,
              transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * stagger}ms, opacity 0.8s ease ${i * stagger}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </div>
  );
}
