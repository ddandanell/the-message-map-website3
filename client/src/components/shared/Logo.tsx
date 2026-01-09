import { Link } from "wouter";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/">
      <a className={`flex items-center gap-3 font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity ${className}`}>
        <div className="relative w-8 h-8 flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-icon"
          >
            <defs>
              <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="50%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#0f766e" />
              </linearGradient>
              <linearGradient id="petalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
              <linearGradient id="petalGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            
            {/* Outer Petals - 8 petals in a circle */}
            <g className="petals-outer">
              {/* Top */}
              <ellipse
                cx="16"
                cy="6"
                rx="3.5"
                ry="5"
                fill="url(#petalGradient1)"
                className="petal-1"
              />
              {/* Top Right */}
              <ellipse
                cx="22"
                cy="10"
                rx="3.5"
                ry="5"
                fill="url(#petalGradient2)"
                transform="rotate(45 22 10)"
                className="petal-2"
              />
              {/* Right */}
              <ellipse
                cx="26"
                cy="16"
                rx="3.5"
                ry="5"
                fill="url(#petalGradient1)"
                transform="rotate(90 26 16)"
                className="petal-3"
              />
              {/* Bottom Right */}
              <ellipse
                cx="22"
                cy="22"
                rx="3.5"
                ry="5"
                fill="url(#petalGradient2)"
                transform="rotate(135 22 22)"
                className="petal-4"
              />
              {/* Bottom */}
              <ellipse
                cx="16"
                cy="26"
                rx="3.5"
                ry="5"
                fill="url(#petalGradient1)"
                transform="rotate(180 16 26)"
                className="petal-5"
              />
              {/* Bottom Left */}
              <ellipse
                cx="10"
                cy="22"
                rx="3.5"
                ry="5"
                fill="url(#petalGradient2)"
                transform="rotate(225 10 22)"
                className="petal-6"
              />
              {/* Left */}
              <ellipse
                cx="6"
                cy="16"
                rx="3.5"
                ry="5"
                fill="url(#petalGradient1)"
                transform="rotate(270 6 16)"
                className="petal-7"
              />
              {/* Top Left */}
              <ellipse
                cx="10"
                cy="10"
                rx="3.5"
                ry="5"
                fill="url(#petalGradient2)"
                transform="rotate(315 10 10)"
                className="petal-8"
              />
            </g>
            
            {/* Inner Petals - 4 petals */}
            <g className="petals-inner">
              <ellipse
                cx="20"
                cy="14"
                rx="2.5"
                ry="4"
                fill="url(#lotusGradient)"
                transform="rotate(-30 20 14)"
                className="petal-inner-1"
              />
              <ellipse
                cx="12"
                cy="14"
                rx="2.5"
                ry="4"
                fill="url(#lotusGradient)"
                transform="rotate(30 12 14)"
                className="petal-inner-2"
              />
              <ellipse
                cx="16"
                cy="10"
                rx="2.5"
                ry="4"
                fill="url(#lotusGradient)"
                className="petal-inner-3"
              />
              <ellipse
                cx="16"
                cy="20"
                rx="2.5"
                ry="4"
                fill="url(#lotusGradient)"
                transform="rotate(180 16 20)"
                className="petal-inner-4"
              />
            </g>
            
            {/* Center Circle - Pulsing */}
            <circle
              cx="16"
              cy="16"
              r="3"
              fill="url(#lotusGradient)"
              className="center-circle"
            />
            
            {/* Inner Glow */}
            <circle
              cx="16"
              cy="16"
              r="1.5"
              fill="#ffffff"
              opacity="0.7"
              className="inner-glow"
            />
          </svg>
        </div>
        {showText && <span className="text-primary">Massage Bali</span>}
      </a>
    </Link>
  );
}
