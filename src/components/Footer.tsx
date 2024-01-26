import Image from 'next/image'
import './Footer.css'
import Link from 'next/link'
import { BsEnvelope, BsFacebook, BsInstagram, BsMailbox, BsPhone, BsTelephone, BsWhatsapp } from 'react-icons/bs'
function Footer() {
  return (
    <footer className='h-16 w-full flex justify-center items-center footerContainer gap-4 p-2 max-md:flex-wrap max-md:h-auto'>
        <section>
            <figure className=''>
                <Image src='/logo.webp' width={192}height={192} className='w-48 aspect-auto cursor-pointer' alt='logo'/>
            </figure>
        </section>
        <hr className='max-md:hidden'/>
        <section className='flex flex-col items-center'>
            <h6>Redes</h6>
            <div className='flex gap-3 '>
                <Link href='' about=''>
                    <BsInstagram size={20}/>
                </Link>
                <Link href='' about=''>
                    <BsFacebook size={20}/>
                </Link>
                <Link href='' about=''>
                    <BsWhatsapp size={20}/>
                </Link>
            </div>
        </section>
        <hr className='max-md:hidden'/>
        <section>
            <p className='flex gap-1 items-center'>
                <BsTelephone size={18}/> 0800-000-000
            </p>
            <p className='flex gap-1 items-center'>
                <BsEnvelope size={18 }/> contato@email.com
            </p>
        </section>
        <hr className='max-md:hidden'/>
        <section>
            Todos los derechos reservados &copy; 2024
        </section>
    </footer>
  )
}

export default Footer