export default function Copy({ height = 24 }: { height?: number }) {
  const width = height / 1.12

  return (
    <svg style={{ fill: 'rgb(var(--foreground))', minWidth: `${width}px`, minHeight: `${height}px` }} width={width} height={height} viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillOpacity="0.25" d="M11.6071 0H18.5324C19.2411 0 19.9219 0.278906 20.4241 0.771094L24.2132 4.48438C24.7154 4.97656 25 5.64375 25 6.33828V18.375C25 19.8242 23.8002 21 22.3214 21H11.6071C10.1283 21 8.92857 19.8242 8.92857 18.375V2.625C8.92857 1.17578 10.1283 0 11.6071 0ZM2.67857 7H7.14286V10.5H3.57143V24.5H14.2857V22.75H17.8571V25.375C17.8571 26.8242 16.6574 28 15.1786 28H2.67857C1.19978 28 0 26.8242 0 25.375V9.625C0 8.17578 1.19978 7 2.67857 7Z" />
    </svg>
  )
}