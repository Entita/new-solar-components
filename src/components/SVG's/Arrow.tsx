export default function Arrow({ height = 16 }: { height?: number }) {
  const width = height / 1.12

  return (
    <svg style={{ fill: 'rgb(var(--background))', minWidth: `${width}px`, minHeight: `${height}px` }} width={width} height={height} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.292892 6.79289C-0.0976315 7.18342 -0.0976314 7.81658 0.292893 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428933C7.68054 0.0384085 7.04738 0.0384086 6.65685 0.428933L0.292892 6.79289ZM16 6.5L0.999999 6.5L0.999999 8.5L16 8.5L16 6.5Z" />
    </svg>
  )
}