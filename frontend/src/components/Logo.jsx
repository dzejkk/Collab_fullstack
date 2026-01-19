export default function PoorManMarketplaceLogo({ size = 120 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="60 90 470 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .ink {
          fill: none;
          stroke: var(--primary);
          stroke-width: 6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .text-main {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 800;
          font-size: 64px;
          fill: #000;
          letter-spacing: 2px;
        }
        .text-sub {
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 600;
          font-size: 28px;
          fill: #000;
          letter-spacing: 4px;
        }
      `}</style>

      {/* Bazaar roof */}
      <path className="ink" d="M120 180 L300 120 L480 180" />

      {/* Roof supports */}
      <path className="ink" d="M160 180 L160 260" />
      <path className="ink" d="M440 180 L440 260" />

      {/* Table */}
      <path className="ink" d="M180 260 L420 260" />
      <path className="ink" d="M200 300 L400 300" />

      {/* Items */}
      <circle cx="220" cy="240" r="12" fill="#000" />
      <rect x="260" y="220" width="40" height="30" fill="#000" />
      <rect x="320" y="225" width="30" height="25" fill="#000" />
      <circle cx="380" cy="240" r="10" fill="#000" />

      {/* Text */}
      <text x="300" y="380" textAnchor="middle" className="text-main">
        POOR'S MAN
      </text>
      <text x="300" y="430" textAnchor="middle" className="text-sub">
        MARKETPLACE
      </text>

      {/* Brush underline */}
      <path className="ink" d="M170 455 C260 490, 340 490, 430 455" />
    </svg>
  );
}
