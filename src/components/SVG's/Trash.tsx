export default function Trash({ height = 24, color = "#C96161" }: { height?: number, color?: string }) {
  const width = height / 1.2

  return (
    <svg style={{ minWidth: `${width}px`, minHeight: `${height}px` }} width={width} height={height} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M3.01786 0.414609C3.13839 0.1605 3.38616 0 3.65625 0H6.34375C6.61384 0 6.86161 0.1605 6.98214 0.414609L7.14286 0.75H9.28571C9.6808 0.75 10 1.08586 10 1.5C10 1.91414 9.6808 2.25 9.28571 2.25H0.714286C0.319866 2.25 0 1.91414 0 1.5C0 1.08586 0.319866 0.75 0.714286 0.75H2.85714L3.01786 0.414609ZM8.8125 10.9242C8.77679 11.5383 8.31027 12 7.7433 12H2.2567C1.69085 12 1.22254 11.5383 1.18728 10.9242L0.694196 3H9.28571L8.8125 10.9242Z" />
    </svg>
  )
}