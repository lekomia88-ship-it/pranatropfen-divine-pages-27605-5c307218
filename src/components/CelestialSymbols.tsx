export const MoonSymbol = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Crescent moon */}
      <path d="M 30 20 Q 25 50 30 80 Q 50 70 55 50 Q 50 30 30 20 Z" />
      {/* Small stars */}
      <circle cx="65" cy="30" r="1.5" fill="currentColor" />
      <circle cx="70" cy="45" r="1" fill="currentColor" />
      <circle cx="75" cy="65" r="1.2" fill="currentColor" />
    </g>
  </svg>
);

export const SunSymbol = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Sun circle */}
      <circle cx="50" cy="50" r="15" />
      {/* Sun rays */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 50 + 20 * Math.cos(angle);
        const y1 = 50 + 20 * Math.sin(angle);
        const x2 = 50 + 30 * Math.cos(angle);
        const y2 = 50 + 30 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  </svg>
);
