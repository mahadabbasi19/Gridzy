export function CircuitPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#155B58" strokeWidth="1.5" opacity="0.5">
        <path d="M20 60 H140 L170 90 V200" />
        <path d="M380 40 H260 L230 70 V160 L200 190 H80" />
        <path d="M40 340 H160 L190 310 V220" />
        <path d="M360 380 H240 L210 350 V260" />
        <path d="M20 200 H100" />
        <path d="M300 200 H380" />
      </g>
      <g fill="#F5A623">
        <circle cx="20" cy="60" r="5" />
        <circle cx="170" cy="200" r="5" />
        <circle cx="380" cy="40" r="5" />
        <circle cx="80" cy="190" r="5" />
        <circle cx="40" cy="340" r="5" />
        <circle cx="190" cy="220" r="5" />
        <circle cx="360" cy="380" r="5" />
        <circle cx="210" cy="260" r="5" />
        <circle cx="200" cy="190" r="4" />
      </g>
      <g fill="#155B58" opacity="0.6">
        <circle cx="140" cy="60" r="3.5" />
        <circle cx="260" cy="40" r="3.5" />
        <circle cx="230" cy="70" r="3.5" />
        <circle cx="160" cy="340" r="3.5" />
        <circle cx="240" cy="380" r="3.5" />
        <circle cx="100" cy="200" r="3.5" />
        <circle cx="300" cy="200" r="3.5" />
      </g>
    </svg>
  );
}
