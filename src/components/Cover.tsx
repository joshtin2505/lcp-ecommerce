'use client'
import CartContextProvider from '@/context/CartContext'
import React from 'react'

function Cover ({ children }: { children: React.ReactNode }) {
  return (
    <CartContextProvider>
        {children}
    </CartContextProvider>

  )
}

export default Cover
