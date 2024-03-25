"use client"
import { AuthProvider } from "@/context/AuthContext"
import CartContextProvider from "@/context/CartContext"
import React from "react"

function Cover({ children }: { children: React.ReactNode }) {
  return (
    <CartContextProvider>
      <AuthProvider>{children}</AuthProvider>
    </CartContextProvider>
  )
}

export default Cover
