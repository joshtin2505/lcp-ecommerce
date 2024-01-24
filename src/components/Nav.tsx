'use client'
import Link from 'next/link'
import './Nav.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { BsCart } from 'react-icons/bs'
function Nav() {
    const pathname = usePathname()
    return (
    <nav className='nav w-full flex px-6 py-2 justify-between items-center rounded'>
        <Link href='/' >
            <Image src='/logo.webp' width={192}height={192} className='w-48 aspect-auto cursor-pointer' alt='logo'/>
        </Link>
        <ul className='flex gap-4 items-center justify-center text-center'>
            <Link className={pathname === '/'?'linkSelected' :'links'} href='/'>Inicio</Link>
            <Link className={pathname === '/#products'?'linkSelected' :'links'} href='#products'>Productos</Link>
            <Link className={pathname === '/#aboutUs'?'linkSelected' :'links'} href='#aboutUs'>Sobre Nosotros</Link>
            <Link className={pathname === 'signIn'?'linkSelected' :'links'} href='signIn'>Iniciar Sesion</Link>
            <Link className={pathname === 'signUp'?'linkSelected' :'links'} href='signUp'>Crear Cuenta</Link>
            <div className="relative">
                <BsCart className={'cartIcon'} size={22}/>
                {/* <span className='cartCounter'>0</span> */}
            </div>
        </ul>
    </nav>
  )
}

export default Nav