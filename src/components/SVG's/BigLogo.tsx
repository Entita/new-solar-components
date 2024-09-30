export default function BigLogo({ height = 45, color = '#1D1D1D' }: { height?: number, color?: string }) {
  const width = height / 1.290909090909091

  return (
    <svg style={{ display: 'flex', margin: 'auto', shapeRendering: 'crispEdges' }} width={width} height={height} viewBox="0 0 622 932" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_117_75)">
        <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M609.829 -15.9937C612.243 -20.6571 606.755 -25.4129 602.482 -22.3608L75.5693 354.006C72.5786 356.143 72.8374 360.667 76.0523 362.448L253.655 460.853L18.5134 900.52C16.0297 905.164 21.4881 909.997 25.7972 906.969L567.78 526.123C570.833 523.978 570.545 519.365 567.249 517.615L383.962 420.361L609.829 -15.9937Z"/>
      </g>
      <defs>
        <filter id="filter0_d_117_75" x="0.890381" y="-27.3256" width="620.529" height="959.237" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_117_75"/>
          <feOffset dx="-3" dy="10"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_117_75"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_117_75" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}