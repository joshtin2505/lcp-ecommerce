'use client'
import Nav from "@/components/Nav"
import Cart from "@/components/Cart"
import WelcomeSection from "@/components/WelcomeSection"
import Products from "@/components/Products"
import AboutUs from "@/components/AboutUs"
import Footer from "@/components/Footer"
import CartContextProvider from "@/context/CartContext"

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
