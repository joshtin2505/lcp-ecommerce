import Nav from "@/components/Nav"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Nav />
      {children}
    </div>
  )
}

export default layout
