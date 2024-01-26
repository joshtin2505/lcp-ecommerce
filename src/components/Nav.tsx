'use client'
import Link from 'next/link'
import './Nav.css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { BsCart, BsList, BsXLg } from 'react-icons/bs'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
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
            {
                dropDown ? <BsXLg size={24}/>:<BsList size={24}/>
            }            
        </button>
        <AnimatePresence>
            {
                dropDown && (
                    <Links pathname={pathname} type='dropdown'/>
                    )
            }
        </AnimatePresence>
        
    </nav>
  )
}
type LinksProps = {
    pathname: string, type: 'normal'
} | {
    pathname: string, type: 'dropdown'
}
interface OptionsLinksProps {
    pathname: string,
    type: 'normal' | 'dropdown'
}
function OptionsLinks ({pathname, type}: OptionsLinksProps){
    const hidden = type === 'normal' ? 'md:flex hidden' : 'flex md:hidden flex-col'
    return (
        <ul className={'gap-4 items-center justify-center text-center ' + hidden }>
            <Link className={pathname === '/'?'linkSelected' :'links'} href='/'>Inicio</Link>
            <Link className={pathname === '/#products'?'linkSelected' :'links'} href='#products'>Productos</Link>
            <Link className={pathname === '/#aboutUs'?'linkSelected' :'links'} href='#aboutUs'>Sobre Nosotros</Link>
            <Link className={pathname === 'signIn'?'linkSelected' :'links'} href='signIn'>Iniciar Sesion</Link>
            <Link className={pathname === 'signUp'?'linkSelected' :'links'} href='signUp'>Crear Cuenta</Link>
            <Cart/>
        </ul>
    )
}
function Links({pathname, type}: LinksProps) {

    if(type === 'dropdown'){
        return (
            <motion.ul 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={'gap-4 items-center justify-center text-center flex-col absolute z-20 right-20 bottom-[-280px] rounded p-4 dropdownContainer  shadow-xl flex md:hidden'}>
                <OptionsLinks pathname={pathname} type='dropdown'/>
            </motion.ul>
        )
    }
    return (
        <OptionsLinks pathname={pathname} type='normal'/>
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