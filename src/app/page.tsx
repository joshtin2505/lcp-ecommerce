'use client'
import Nav from "@/components/Nav"

import AboutUs from "@/components/AboutUs"
import Products from "@/components/Products"
import Footer from "@/components/Footer"
import CartContextProvider from "@/context/CartContext";
import Cart from "@/components/Cart"
import WelcomeSection from "@/components/WelcomeSection"

export default function Home() {

  return (
    <CartContextProvider>
      <header className="home-header">
          <Nav/>
      </header>      
      <main className="main-container">
        <WelcomeSection/>
        <Products/>
        <AboutUs/>
      </main>
      <Cart/>

      <Footer/>
    </CartContextProvider>

  )
}
