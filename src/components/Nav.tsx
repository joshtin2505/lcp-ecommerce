'use client'
import Link from 'next/link'
import './Nav.css'
import { usePathname } from 'next/navigation'
function Nav() {
    const pathname = usePathname()
    return (
    <nav className='nav w-full flex px-4 py-2 justify-between items-center rounded'>
        <Link href='/' >
            <img src='/logo.webp' className='w-48 aspect-auto cursor-pointer' alt='logo'/>
        </Link>
        <ul className='flex gap-4'>
            <Link className={pathname === '/'?'linkSelected' :'links'} href='/'>Inicio</Link>
            <Link className={pathname === '/#products'?'linkSelected' :'links'} href='#products'>Productos</Link>
            <Link className={pathname === '/#aboutUs'?'linkSelected' :'links'} href='#aboutUs'>Sobre Nosotros</Link>
            <Link className={pathname === 'signIn'?'linkSelected' :'links'} href='signIn'>Iniciar Sesion</Link>
            <Link className={pathname === 'signUp'?'linkSelected' :'links'} href='signUp'>Crear Cuenta</Link>
        </ul>
    </nav>
  )
}

export default Nav