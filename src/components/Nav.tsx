'use client'
import Link from 'next/link'
import './Nav.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { BsCart, BsList } from 'react-icons/bs'
import { useState } from 'react'

function Nav() {
    const pathname = usePathname()
    const [dropDown, setDropDown] = useState<boolean>(false)
    return (
    <nav className='nav w-full flex px-6 py-2 justify-between items-center rounded'>
        <Link href='/' >
            <Image src='/logo.webp' width={192}height={192} className='w-48 aspect-auto cursor-pointer' alt='logo'/>
        </Link>
        <Links pathname={pathname} type='normal'/>
        <button onClick={()=> setDropDown(!dropDown)} className='md:hidden sm:block'>
            <BsList size={24}/>
        </button>
        <Links pathname={pathname} type='dropdown' hidden={dropDown ? 'flex' : 'hidden'}/>

        
    </nav>
  )
}
type hidde = 'hidden' | 'flex'
type LinksProps = {
    pathname: string, type: 'normal', hidden?: undefined
} | {
    pathname: string, type: 'dropdown', hidden: hidde
}
function Links({pathname, type, hidden}: LinksProps) {
    if(type === 'dropdown'){
        return (
            <ul className={'gap-4 items-center justify-center text-center flex-col absolute z-20 right-20 bottom-[-280px] rounded p-4 dropdownContainer ' + hidden}>
                <Link className={pathname === '/'?'linkSelected' :'links'} href='/'>Inicio</Link>
                <Link className={pathname === '/#products'?'linkSelected' :'links'} href='#products'>Productos</Link>
                <Link className={pathname === '/#aboutUs'?'linkSelected' :'links'} href='#aboutUs'>Sobre Nosotros</Link>
                <Link className={pathname === 'signIn'?'linkSelected' :'links'} href='signIn'>Iniciar Sesion</Link>
                <Link className={pathname === 'signUp'?'linkSelected' :'links'} href='signUp'>Crear Cuenta</Link>
                <Cart/>
            </ul>
        )
    }
    return (
        <ul className='md:flex sm:hidden gap-4 items-center justify-center text-center'>
            <Link className={pathname === '/'?'linkSelected' :'links'} href='/'>Inicio</Link>
            <Link className={pathname === '/#products'?'linkSelected' :'links'} href='#products'>Productos</Link>
            <Link className={pathname === '/#aboutUs'?'linkSelected' :'links'} href='#aboutUs'>Sobre Nosotros</Link>
            <Link className={pathname === 'signIn'?'linkSelected' :'links'} href='signIn'>Iniciar Sesion</Link>
            <Link className={pathname === 'signUp'?'linkSelected' :'links'} href='signUp'>Crear Cuenta</Link>
            <Cart/>
        </ul>
    )
}
function Cart() {
    return (
        <div className="relative">
            <BsCart className={'cartIcon'} size={22}/>
            {/* <span className='cartCounter'>0</span> */}
        </div>
    )
}
export default Nav