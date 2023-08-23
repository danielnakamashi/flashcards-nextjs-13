export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>Header</header>
      <nav>Navigation</nav>
      <main>{children}</main>
    </>
  )
}
