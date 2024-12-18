export default function PageWrapper({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`pt-24 fade-in opacity-0 ${className}`}>
      {children}
    </div>
  )
} 