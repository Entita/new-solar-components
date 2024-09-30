export default function Mail({ height = 24 }: { height?: number }) {
  const width = height / 0.78125

  return (
    <svg style={{ fill: 'rgb(var(--foreground))', minWidth: `${width}px`, minHeight: `${height}px` }} width={width} height={height} viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 0.5C1.34375 0.5 0 1.84375 0 3.5C0 4.44375 0.44375 5.33125 1.2 5.9L14.8 16.1C15.5125 16.6313 16.4875 16.6313 17.2 16.1L30.8 5.9C31.5562 5.33125 32 4.44375 32 3.5C32 1.84375 30.6562 0.5 29 0.5H3ZM0 7.5V20.5C0 22.7062 1.79375 24.5 4 24.5H28C30.2062 24.5 32 22.7062 32 20.5V7.5L18.4 17.7C16.975 18.7688 15.025 18.7688 13.6 17.7L0 7.5Z" />
    </svg>
  )
}