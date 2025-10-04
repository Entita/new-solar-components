import styled, { keyframes } from "styled-components"

const pulseAnimation = keyframes`
 0% { transform: translateY(0) scale(1) }
 33% { transform: translateY(-12px) scale(1.025) }
 40% { transform: translateY(-12px) scale(1.025) }
 73% { transform: translateY(0) scale(1) }
 100% { transform: translateY(0) scale(1) }
`

const testAnimation = keyframes`
  0% { background-position: 0 100vh }
  7.5% { background-position: 0 0 }
  100% { background-position: 0 0 }
`

export const BackgroundLogoStyled = styled.div`
  position: absolute;
  top: calc(-22.5vh - 60px);
  right: -750px;
  animation: ${pulseAnimation} 8s infinite ease;
  z-index: -1;
  overflow-x: hidden;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: linear-gradient(to top,rgba(255,255,255,0) 92.5%,rgba(255,255,255,.1) 98%,rgba(255,255,255,0) 100%) no-repeat;
    animation: ${testAnimation} 8s infinite linear;
    animation-delay: 2s;
    mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 622 932"><path d="M609.829 -15.9937C612.243 -20.6571 606.755 -25.4129 602.482 -22.3608L75.5693 354.006C72.5786 356.143 72.8374 360.667 76.0523 362.448L253.655 460.853L18.5134 900.52C16.0297 905.164 21.4881 909.997 25.7972 906.969L567.78 526.123C570.833 523.978 570.545 519.365 567.249 517.615L383.962 420.361L609.829 -15.9937Z" /></svg>') center/contain;
  }
`
