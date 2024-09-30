export default function Logo({ height = 60, color = '#1D1D1D' }: { height?: number, color?: string }) {
  const width = height / 1.290909090909091

  return (
    <svg style={{ position: 'relative', top: '8px', left: '-2px', clipPath: 'inset(0 0 8px 0)' }} width={width} height={height} viewBox="0 0 55 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_117_85)">
        <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M43.2542 5.46528C43.7373 4.53318 42.6393 3.58282 41.7841 4.19287L19.4064 20.1555C18.8078 20.5825 18.8594 21.4869 19.5028 21.8429L27.1868 26.0946L17.1247 44.8833C16.6276 45.8116 17.7198 46.7773 18.5822 46.1721L41.6201 30.0054C42.2312 29.5765 42.1737 28.6545 41.5141 28.3049L33.5919 24.107L43.2542 5.46528Z" />
      </g>
      <defs>
        <filter id="filter0_d_117_85" x="0" y="0" width="54.3726" height="70.3606" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_117_85"/>
          <feOffset dx="-3" dy="10"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_117_85"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_117_85" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}