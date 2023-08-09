export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-screen bg-slate-950">
      <h2 className="text-slate-100">Isso vem do layout</h2>
      {children}
    </div>
  )
}
