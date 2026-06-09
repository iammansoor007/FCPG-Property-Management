export function LogoMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 58 58" className="h-[45px] w-[45px] shrink-0">
      <path d="M29 4 6 16v5L29 9l23 12v-5L29 4Z" fill="#d3a438" />
      <path d="M12 21h5v28l-5-3V21Zm10-5h5v38l-5-3V16Zm10 0h5v35l-5 3V16Zm10 5h5v25l-5 3V21Z" fill="#d3a438" />
      <path d="M6 51 29 58l23-7V46L29 53 6 46v5Z" fill="#796024" opacity=".55" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function SouthCarolinaIcon(props) {
  return (
    <svg viewBox="0 0 80 56" fill="none" {...props}>
      <path d="m11 15 11-6 19 6 13 1 14 14-7 9-16 8-16-5-12 2-9-11 7-8-4-10Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

export function SouthCarolinaMap() {
  const pins = [
    ["Greenville", 130, 68],
    ["Spartanburg", 205, 64],
    ["Anderson", 112, 112],
    ["Columbia", 245, 164],
    ["Florence", 352, 132],
    ["Myrtle Beach", 430, 190],
    ["Charleston", 352, 292],
    ["Beaufort", 287, 338]
  ];

  return (
    <div className="w-full max-w-[470px]">
      <svg viewBox="0 0 520 390" role="img" aria-label="South Carolina service area map" className="h-auto w-full drop-shadow-sm">
        <path
          d="M147 28 244 44l84 23 122 61-16 35 41 18-53 42-27 58-84 71-62-15-52 30-60-55-56 10-38-65 36-50-38-48 48-39-30-43 38-49Z"
          fill="var(--primary-navy)"
        />
        <path
          d="M147 28 244 44l84 23 122 61-16 35 41 18-53 42-27 58-84 71-62-15-52 30-60-55-56 10-38-65 36-50-38-48 48-39-30-43 38-49Z"
          fill="none"
          stroke="#ffffff"
          strokeOpacity=".16"
          strokeWidth="3"
        />
        {pins.map(([label, x, y]) => (
          <g key={label}>
            <circle cx={x} cy={y} r="7" fill="var(--brand-gold)" />
            <circle cx={x} cy={y} r="3" fill="var(--primary-navy)" />
            <text x={x + 10} y={y + 4} fill="#ffffff" fontSize="12" fontWeight="700">
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
