export const FlowerOfLife = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 400"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.05">
      {/* Center circle */}
      <circle cx="200" cy="200" r="40" />
      {/* Six circles around center */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = 200 + 40 * Math.cos(angle);
        const y = 200 + 40 * Math.sin(angle);
        return <circle key={i} cx={x} cy={y} r="40" />;
      })}
      {/* Outer ring */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 200 + 80 * Math.cos(angle);
        const y = 200 + 80 * Math.sin(angle);
        return <circle key={`outer-${i}`} cx={x} cy={y} r="40" />;
      })}
    </g>
  </svg>
);

export const HexagonPattern = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 400"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.05">
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => {
          const x = 50 + col * 80 + (row % 2) * 40;
          const y = 50 + row * 70;
          const points = Array.from({ length: 6 })
            .map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180;
              const px = x + 30 * Math.cos(angle);
              const py = y + 30 * Math.sin(angle);
              return `${px},${py}`;
            })
            .join(" ");
          return <polygon key={`${row}-${col}`} points={points} />;
        })
      )}
    </g>
  </svg>
);

export const SacredTriangles = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 400 400"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.05">
      {/* Upward triangles */}
      <polygon points="200,80 260,180 140,180" />
      <polygon points="200,220 260,320 140,320" />
      <polygon points="280,150 340,250 220,250" />
      <polygon points="120,150 180,250 60,250" />
      {/* Downward triangles */}
      <polygon points="200,180 140,80 260,80" />
      <polygon points="200,320 140,220 260,220" />
    </g>
  </svg>
);
