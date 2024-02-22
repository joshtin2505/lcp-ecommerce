import Image from "next/image"
import Link from "next/link"
import React from "react"
import "./dashboard.css"

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layoutDahsboardContainer">
      <header className="w-full flex justify-start items-center px-4 py-2">
        <Link href="/dashboard">
          <Image
            src="/logo.webp"
            width={164}
            height={164}
            className=" aspect-auto cursor-pointer"
            alt="logo"
          />
        </Link>
      </header>
      <div className="flex">
        <aside className=" h-screen w-72 bg-light-Background-tertiary">
          aside
        </aside>
        <main>{children}</main>
      </div>
      <footer></footer>
    </div>
  )
}

export default DashboardLayout
