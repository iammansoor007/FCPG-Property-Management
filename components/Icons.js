import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import data from "@/data/data.json";

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
  const [activeCity, setActiveCity] = useState(null);
  const citiesData = data.serviceAreas.citiesData;
  const activeCityData = citiesData.find(c => c.id === activeCity);

  return (
    <div className="relative w-full aspect-[4/3] max-w-[650px] rounded-2xl border border-[rgba(5,41,70,0.06)] bg-white/40 backdrop-blur-[4px] shadow-sm p-4 overflow-hidden flex items-center justify-center hover:border-[rgba(201,155,49,0.35)] transition-all duration-300">
      {/* Tooltip Overlay */}
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 p-2.5 sm:p-3 rounded-lg border border-[rgba(201,155,49,0.18)] bg-[#052946]/95 backdrop-blur-md shadow-lg z-30 pointer-events-none min-w-[130px] sm:min-w-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity ? activeCity : "statewide"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {activeCityData ? (
              <>
                <div className="flex items-center gap-1.5 mb-0.5 text-[var(--brand-gold)]">
                  <MapPin size={10} className="shrink-0 animate-bounce" />
                  <p className="font-display font-bold text-[9px] sm:text-[10px] uppercase tracking-wider">{activeCityData.name}</p>
                </div>
                <p className="font-sans font-black text-white text-[14px] sm:text-[18px] leading-none tracking-tight">
                  {activeCityData.count}
                </p>
                <p className="font-sans font-semibold text-[var(--brand-gold)]/80 text-[7px] sm:text-[8px] uppercase tracking-widest mt-0.5">
                  {activeCityData.type}
                </p>
              </>
            ) : (
              <>
                <div className="flex items-center gap-1.5 mb-0.5 text-[var(--brand-gold)]/60">
                  <Building2 size={10} className="shrink-0" />
                  <p className="font-display font-bold text-[9px] sm:text-[10px] uppercase tracking-wider">SC Presence</p>
                </div>
                <p className="font-sans font-black text-white text-[14px] sm:text-[18px] leading-none tracking-tight">
                  8 Regions
                </p>
                <p className="font-sans font-semibold text-white/50 text-[7px] sm:text-[8px] uppercase tracking-widest mt-0.5">
                  Licensed Management
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <svg viewBox="0 0 520 390" role="img" aria-label="South Carolina service area map" className="h-auto w-full select-none relative z-10">
        <defs>
          <linearGradient id="map-fill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#072642" />
            <stop offset="100%" stopColor="#031b31" />
          </linearGradient>

          <linearGradient id="map-border-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-gold)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#e8b84b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--brand-gold)" stopOpacity="0.3" />
          </linearGradient>

          <pattern id="dot-matrix" width="2.8" height="2.8" patternUnits="userSpaceOnUse">
            <circle cx="0.46" cy="0.46" r="0.28" fill="var(--brand-gold)" fillOpacity="0.18" />
          </pattern>
        </defs>

        <g transform="translate(-2990, -1410) scale(4.3)">
          {/* State outline - Navy gradient layer */}
          <path
            d="M 764.94328,408.16488 L 763.16622,409.13438 L 760.57965,407.84109 L 759.93301,405.7395 L 758.63973,402.18297 L 756.37647,400.08137 L 753.7899,399.43473 L 752.1733,394.58492 L 749.42506,388.60347 L 745.22189,386.66353 L 743.12029,384.72361 L 741.82701,382.13704 L 739.72542,380.1971 L 737.46217,378.90382 L 735.19892,375.99393 L 732.12737,373.73069 L 727.60086,371.95241 L 727.11588,370.49747 L 724.69098,367.58758 L 724.20599,366.13262 L 720.81111,360.95949 L 717.41624,361.12115 L 713.37472,358.69623 L 712.08144,357.40295 L 711.75812,355.62468 L 712.56642,353.68476 L 714.82967,352.71478 L 714.31885,350.4257 L 720.08695,348.08913 L 729.20245,343.50013 L 736.97718,342.69182 L 753.09158,342.26934 L 755.72983,344.14677 L 757.40893,347.50499 L 761.71128,346.89501 L 774.32081,345.44005 L 777.2307,346.24836 L 789.84024,353.84642 L 799.94832,361.9681 L 794.52715,367.42644 L 791.94058,373.56954 L 791.4556,379.8743 L 789.839,380.6826 L 788.70737,383.43083 L 786.28247,384.07747 L 784.18088,387.634 L 781.43265,390.38223 L 779.16941,393.7771 L 777.5528,394.5854 L 773.99627,397.98027 L 771.08638,398.14193 L 772.05635,401.37514 L 767.04487,406.8716 L 764.94328,408.16488 z"
            fill="url(#map-fill-grad)"
          />

          {/* State outline - Gold dot matrix pattern overlay */}
          <path
            d="M 764.94328,408.16488 L 763.16622,409.13438 L 760.57965,407.84109 L 759.93301,405.7395 L 758.63973,402.18297 L 756.37647,400.08137 L 753.7899,399.43473 L 752.1733,394.58492 L 749.42506,388.60347 L 745.22189,386.66353 L 743.12029,384.72361 L 743.12029,384.72361 L 741.82701,382.13704 L 739.72542,380.1971 L 737.46217,378.90382 L 735.19892,375.99393 L 732.12737,373.73069 L 727.60086,371.95241 L 727.11588,370.49747 L 724.69098,367.58758 L 724.20599,366.13262 L 720.81111,360.95949 L 717.41624,361.12115 L 713.37472,358.69623 L 712.08144,357.40295 L 711.75812,355.62468 L 712.56642,353.68476 L 714.82967,352.71478 L 714.31885,350.4257 L 720.08695,348.08913 L 729.20245,343.50013 L 736.97718,342.69182 L 753.09158,342.26934 L 755.72983,344.14677 L 757.40893,347.50499 L 761.71128,346.89501 L 774.32081,345.44005 L 777.2307,346.24836 L 789.84024,353.84642 L 799.94832,361.9681 L 794.52715,367.42644 L 791.94058,373.56954 L 791.4556,379.8743 L 789.839,380.6826 L 788.70737,383.43083 L 786.28247,384.07747 L 784.18088,387.634 L 781.43265,390.38223 L 779.16941,393.7771 L 777.5528,394.5854 L 773.99627,397.98027 L 771.08638,398.14193 L 772.05635,401.37514 L 767.04487,406.8716 L 764.94328,408.16488 z"
            fill="url(#dot-matrix)"
          />
          <path
            d="M 764.94328,408.16488 L 763.16622,409.13438 L 760.57965,407.84109 L 759.93301,405.7395 L 758.63973,402.18297 L 756.37647,400.08137 L 753.7899,399.43473 L 752.1733,394.58492 L 749.42506,388.60347 L 745.22189,386.66353 L 743.12029,384.72361 L 741.82701,382.13704 L 739.72542,380.1971 L 737.46217,378.90382 L 735.19892,375.99393 L 732.12737,373.73069 L 727.60086,371.95241 L 727.11588,370.49747 L 724.69098,367.58758 L 724.20599,366.13262 L 720.81111,360.95949 L 717.41624,361.12115 L 713.37472,358.69623 L 712.08144,357.40295 L 711.75812,355.62468 L 712.56642,353.68476 L 714.82967,352.71478 L 714.31885,350.4257 L 720.08695,348.08913 L 729.20245,343.50013 L 736.97718,342.69182 L 753.09158,342.26934 L 755.72983,344.14677 L 757.40893,347.50499 L 761.71128,346.89501 L 774.32081,345.44005 L 777.2307,346.24836 L 789.84024,353.84642 L 799.94832,361.9681 L 794.52715,367.42644 L 791.94058,373.56954 L 791.4556,379.8743 L 789.839,380.6826 L 788.70737,383.43083 L 786.28247,384.07747 L 784.18088,387.634 L 781.43265,390.38223 L 779.16941,393.7771 L 777.5528,394.5854 L 773.99627,397.98027 L 771.08638,398.14193 L 772.05635,401.37514 L 767.04487,406.8716 L 764.94328,408.16488 z"
            fill="none"
            stroke="url(#map-border-grad)"
            strokeWidth="0.58"
          />

          {/* Network connection lines from Columbia (Center Hub) */}
          {[
            { target: "Greenville", d: "M 754 370 Q 740 354, 727 348" },
            { target: "Spartanburg", d: "M 754 370 Q 746 353, 738 346" },
            { target: "Anderson", d: "M 754 370 Q 737 357, 720 354" },
            { target: "Florence", d: "M 754 370 Q 765 361, 776 360" },
            { target: "Myrtle Beach", d: "M 754 370 Q 772 364, 790 366" },
            { target: "Charleston", d: "M 754 370 Q 763 384, 772 390" },
            { target: "Beaufort", d: "M 754 370 Q 757 389, 760 398" },
          ].map((line) => {
            const isLineActive = activeCity === line.target;
            return (
              <g key={line.target}>
                <path
                  d={line.d}
                  fill="none"
                  stroke={isLineActive ? "var(--brand-gold)" : "rgba(201, 155, 49, 0.2)"}
                  strokeWidth={isLineActive ? "0.46" : "0.15"}
                  strokeDasharray={isLineActive ? "1.2" : "0.6 0.8"}
                  className={isLineActive ? "active-network-line" : ""}
                />
              </g>
            );
          })}

          {/* Radar Scanning Ripple from Columbia */}
          <AnimatePresence>
            {activeCity && (
              <motion.circle
                cx="754"
                cy="370"
                initial={{ r: 2, opacity: 0.8 }}
                animate={{ r: 48, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                fill="none"
                stroke="var(--brand-gold)"
                strokeWidth="0.3"
                className="pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* Central Hub Pin - Columbia */}
          <g>
            <circle cx="754" cy="370" r="3.2" fill="none" stroke="var(--brand-gold)" strokeWidth="0.3" className="opacity-40" />
            <circle cx="754" cy="370" r="1.4" fill="var(--brand-gold)" />
          </g>

          {/* Render Active Cities Pins */}
          {citiesData.map((city) => {
            const isActive = activeCity === city.id;
            return (
              <g
                key={city.id}
                className="cursor-pointer"
                onMouseEnter={() => setActiveCity(city.id)}
                onMouseLeave={() => setActiveCity(null)}
              >
                {isActive && (
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="3.5"
                    fill="none"
                    stroke="var(--brand-gold)"
                    strokeWidth="0.3"
                    className="opacity-75 animate-ping origin-center"
                  />
                )}
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={isActive ? "2" : "1.3"}
                  fill={isActive ? "var(--brand-gold)" : "rgba(201, 155, 49, 0.85)"}
                  className="transition-all duration-300"
                />
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={isActive ? "0.8" : "0.5"}
                  fill="var(--primary-navy)"
                  className="transition-all duration-300"
                />
                <text
                  x={city.x + 2.5}
                  y={city.y + 0.8}
                  fill={isActive ? "var(--brand-gold)" : "#ffffff"}
                  fontSize="2.5"
                  fontWeight={isActive ? "800" : "600"}
                  className="transition-all duration-300 pointer-events-none select-none font-sans"
                  style={{
                    textShadow: "0 0.5px 1px rgba(0,0,0,0.6)"
                  }}
                >
                  {city.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
