"use client"
import Nav from "@/components/Nav"

import AboutUs from "@/components/Index/AboutUs"
import Products from "@/components/Products"
import Footer from "@/components/Footer"
import Cart from "@/components/Cart"
import WelcomeSection from "@/components/Index/WelcomeSection"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="main-containers">
        <WelcomeSection />
        <Products />
        <AboutUs />
      </main>
      <Cart />

      <Footer />
    </>
  )
}
