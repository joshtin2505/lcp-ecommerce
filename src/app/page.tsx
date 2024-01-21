'use client'
import Nav from "@/components/Nav"
import ImageGallery from "@/components/ImageGallery"
import useTheme from "@/hooks/useThemes"
export default function Home() {
  const setTheme = useTheme()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
    <header className="w-screen relative px-14 pt-4">
      <Nav/>
    </header>      

    <section className="h-screen w-full items-center">
      <ImageGallery/>
    </section>
    
     
    </main>
  )
}
