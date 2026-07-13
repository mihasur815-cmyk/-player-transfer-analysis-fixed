export function TribunaLogo({ className }: { className?: string }) {
  const star =
    "M20 1 L24.47 13.85 L38.07 14.13 L27.23 22.35 L31.17 35.37 L20 27.6 L8.83 35.37 L12.77 22.35 L1.93 14.13 L15.53 13.85 Z"

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Tribuna"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="tribuna-star">
          <path d={star} />
        </clipPath>
      </defs>
      <g clipPath="url(#tribuna-star)">
        {/* Blue upper-left segment */}
        <polygon points="0,0 29,0 7,40 0,40" fill="oklch(0.63 0.16 262)" />
        {/* Yellow lower-right segment */}
        <polygon points="29,0 40,0 40,40 7,40" fill="oklch(0.84 0.13 92)" />
      </g>
    </svg>
  )
}
