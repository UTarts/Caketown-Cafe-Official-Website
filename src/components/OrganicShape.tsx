interface OrganicShapeProps {
  className?: string;
  color?: string;
  variant?: 'blob1' | 'blob2' | 'blob3' | 'arch' | 'wave';
  style?: React.CSSProperties;
}

export function OrganicShape({ className = '', color = '#F47A1F', variant = 'blob1', style }: OrganicShapeProps) {
  const paths: Record<string, string> = {
    blob1: 'M 50,0 C 77.5,0 100,22.5 100,50 C 100,77.5 77.5,100 50,100 C 22.5,100 0,77.5 0,50 C 0,22.5 22.5,0 50,0 Z',
    blob2: 'M 50,5 C 75,5 95,25 95,50 C 95,72 80,90 60,95 C 35,95 10,78 8,55 C 5,28 25,5 50,5 Z',
    blob3: 'M 40,0 C 70,0 100,15 100,45 C 100,70 85,95 55,100 C 30,100 0,80 0,50 C 0,20 15,0 40,0 Z',
    arch: 'M 0,100 L 0,50 C 0,22.5 22.5,0 50,0 C 77.5,0 100,22.5 100,50 L 100,100 Z',
    wave: 'M 0,100 C 25,80 50,80 75,90 C 100,100 100,100 100,100 L 100,100 L 0,100 Z',
  };

  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={paths[variant]} fill={color} />
    </svg>
  );
}
