'use client'
import './Nav.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsCart, BsList, BsMoonStars, BsSun, BsXLg } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/hooks/useCart'
import useTheme from '@/hooks/useThemes'
function Nav() {
    const pathname = usePathname() // Get the current pathname
    const [navDropDown, setNavDropDown] = useState<boolean>(false) // State to control the dropdown menu
    return (
    <nav className='nav'>
        {/* Logo */}
        <Link className='logoContainer' href='/' >
            <Image src='/logo.webp' width={192}height={192} className='logo' alt='logo'/>
        </Link>
        {/* Links */}
        <Links pathname={pathname} type='normal'/>
        {/* Hamburger Logo for dropdown*/}
        <button onClick={()=> setNavDropDown(!navDropDown)} className='md:hidden sm:block'>
            {
                navDropDown ? <BsXLg size={24}/>:<BsList size={24}/>
            }            
        </button>
        {/* Dropdown */}
        <AnimatePresence>
            {
                navDropDown && (
                    <Links pathname={pathname} type='dropdown'/>
                    )
            }
        </AnimatePresence>
        
    </nav>
  )
}

interface LinksProps { // Props for the OptionsLinks component
    pathname: string,
    type: 'normal' | 'dropdown'
}
function OptionsLinks ({pathname, type}: LinksProps){ // Component to render the links
    const hidden = type === 'normal' ? 'md:flex hidden' : 'flex md:hidden flex-col' // If the type is normal, we hide the dropdown, if not, we show it
    return (// We render the links
        <ul className={'gap-4 items-center justify-center text-center ' + hidden }>
            <Link className={pathname === '/'?'linkSelected' :'links'} href='/'>Inicio</Link>
            <Link className={pathname === '/#products'?'linkSelected' :'links'} href='#products'>Productos</Link>
            <Link className={pathname === '/#aboutUs'?'linkSelected' :'links'} href='#aboutUs'>Sobre Nosotros</Link>
            <Link className={pathname === 'signIn'?'linkSelected' :'links'} href='signIn'>Iniciar Sesion</Link>
            <Link className={pathname === 'signUp'?'linkSelected' :'links'} href='signUp'>Crear Cuenta</Link>
            <ThemeDropDown/>
            <Cart/>
        </ul>
    )
}
function Links({pathname, type}: LinksProps) { // Component to render the links
    if(type === 'dropdown'){
        return ( // If the type is dropdown, we use the motion component to animate the dropdown
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
    return ( // If the type is normal, we just render the OptionsLinks component
        <OptionsLinks pathname={pathname} type='normal'/>
    )
}
function Cart() {
    const [isClient, setIsClient] = useState(false) // State to check if the component is mounted
    const {cart, setOpenCart, openCart} = useCart() // We get the cart and the setOpenCart function from the useCart hook
    useEffect(()=>{ // We set the isClient state to true when the component is mounted
        setIsClient(true) 
    },[openCart])
    if (isClient){ // If the component is mounted, we render the cart button
        return (
            <button onClick={() => setOpenCart(true)} className="relative outline-none">
                <BsCart className={'cartIcon'} size={22}/>
                {
                    cart.length > 0 && <span className='cartCounter'>{cart.length}</span>
                }
                
            </button>
        )
    }
}
function ThemeDropDown() { // Component to render the theme dropdown
    const {setTheme, theme} = useTheme()
    const handleChangeTheme = () => {
        setTheme(prevState => prevState === 'light' ? 'dark' : 'light')
    }
    return (
        <div className="flex justify-center items-center">
            <button onClick={handleChangeTheme} className='transition-all outline-none hover:text-primary-300 hover:scale-105'>
                {
                    theme === 'light' ? <BsMoonStars size={22}/> : <BsSun size={22}/>
                }
            </button>
        </div>
    )
}
export default Nav