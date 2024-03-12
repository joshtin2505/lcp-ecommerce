import Nav from "@/components/Nav"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default layout