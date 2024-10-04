export default function Logo({ height = 60, type = 'dark' }: { height?: number, color?: string, type?: 'dark' | 'light' }) {
  const newHeight = type === 'light' ? height - 26 : height
  const width = newHeight / 1.290909090909091

  return (
    <>
      {type === 'dark'
        ? <DarkLogo width={width} height={newHeight} />
        : <LightLogo width={width} height={newHeight} />}
    </>
  )
}

const LightLogo = ({ height, width }: { height: number, width: number }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 27 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#F6B047" d="M2.11916 42.7315C1.25671 43.3367 0.164535 42.371 0.661652 41.4427L12.4982 19.3405C12.7583 18.8548 13.3627 18.6707 13.8497 18.9288L25.051 24.8644C25.7107 25.2139 25.7681 26.1359 25.157 26.5648L2.11916 42.7315Z" />
      <path fill="#F6B047" d="M2.11916 42.7315C1.25671 43.3367 0.164535 42.371 0.661652 41.4427L12.4982 19.3405C12.7583 18.8548 13.3627 18.6707 13.8497 18.9288L25.051 24.8644C25.7107 25.2139 25.7681 26.1359 25.157 26.5648L2.11916 42.7315Z" />
      <path fill="#F6D047" d="M25.321 0.752287C26.1763 0.142241 27.2743 1.0926 26.7911 2.0247L15.3739 24.0521C15.1147 24.5521 14.4933 24.7398 14.0002 24.467L3.03971 18.4023C2.39636 18.0463 2.34471 17.1419 2.94334 16.7149L25.321 0.752287Z" />
      <path fill="#F6D047" d="M25.321 0.752287C26.1763 0.142241 27.2743 1.0926 26.7911 2.0247L15.3739 24.0521C15.1147 24.5521 14.4933 24.7398 14.0002 24.467L3.03971 18.4023C2.39636 18.0463 2.34471 17.1419 2.94334 16.7149L25.321 0.752287Z" />
    </svg>
  )
}

const DarkLogo = ({ height, width }: { height: number, width: number }) => {
  return (
    <svg style={{ position: 'relative', top: '8px', left: '-2px', clipPath: 'inset(0 0 8px 0)' }} width={width} height={height} viewBox="0 0 55 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_117_85)">
        <path fill="#1D1D1D" fillRule="evenodd" clipRule="evenodd" d="M43.2542 5.46528C43.7373 4.53318 42.6393 3.58282 41.7841 4.19287L19.4064 20.1555C18.8078 20.5825 18.8594 21.4869 19.5028 21.8429L27.1868 26.0946L17.1247 44.8833C16.6276 45.8116 17.7198 46.7773 18.5822 46.1721L41.6201 30.0054C42.2312 29.5765 42.1737 28.6545 41.5141 28.3049L33.5919 24.107L43.2542 5.46528Z" />
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