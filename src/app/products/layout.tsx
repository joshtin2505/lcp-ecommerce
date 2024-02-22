import Nav from '@/components/Nav'
import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <>
        {/* <Nav/> */}
        {children}
    </>
  )
}

export default layout