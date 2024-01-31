'use Client'
import { useCart } from '@/hooks/useCart'
import './Cart.css'
import { BsCartX, BsCash, BsChevronLeft, BsChevronRight, BsX } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import Image from 'next/image'
function Cart() {
    const {cart, openCart, setOpenCart, addToCart, clearCart, removeFromCart, decreaseQuantity} = useCart() // destructuracion de las funciones del hook useCart
    const [isClient, setIsClient] = useState(false) // estado para saber si el componente esta montado
    useEffect(() => { // efecto para saber si el componente esta montado
        setIsClient(true)
    },[])
    const handelClose = () => { // funcion para cerrar el carrito
        setOpenCart(false)
    }
    const productValor = cart.map((item) => {
        if (item.quantity) {
            return (item.quantity * item.price)
        }
    })
    const asideClass = openCart ? 'fixed h-screen top-0 right-0 py-5 cartContainer z-20 gap-3 pr-9 w-96  flex-col flex' : 'hidden'
  return (
    <aside className={asideClass}>
        <header className='h-20 flex w-full justify-center items-center rounded-md shadow-md headerCart'>
            <h2 className='txt-deg-primary drop-shadow-lg text-6xl xxs:text-5xl font-semibold'>
                Cart
            </h2>
            <button className='absolute right-2 closeBtn rounded-full p-1 transition-all hover:scale-105' onClick={handelClose}>
                <BsX size={25}/>
            </button>
        </header>
        <section className='rounded-md py-7 px-6 itemsContainer shadow-md overflow-y-auto h-full '>
            {
                isClient && cart?.length > 0 ? 
                (
                    <>
                        <ul className='flex flex-col gap-6 w-full justify-center items-center'>
                            {
                                cart.map((item) => {
                                    const {imgSrc, price, id, product: title, quantity} = item 
                                    const totalToItem = quantity? quantity * price : price
                                    return (
                                        <>
                                            <li key={id} className='flex w-full justify-start items-center gap-2 relative itemInCartCard '>
                                                <figure className=" ">
                                                    <Image className="aspect-[114/74] object-cover rounded transition-all hover:scale-110 hover:rounded" src={imgSrc} alt={title} width={100} height={100}/>
                                                </figure>
                                                <section>
                                                    <header className="flex flex-col">
                                                        <h3 className='text-lg font-medium'>{title}</h3>
                                                        <span>${totalToItem}</span>
                                                    </header>
                                                </section>
                                                <aside className="flex absolute right-3 quantityContainer rounded">
                                                    <button className='outline-none btnDeleteItem rounded px-1 mr-[-2px] '
                                                    onClick={() => {
                                                        removeFromCart(item) 
                                                    }}
                                                    >
                                                        <BsCartX size={20}/> 
                                                    </button>
                                                    <button className='outline-none disabled:hidden rounded px-1'
                                                    onClick={() => {
                                                        decreaseQuantity(item)
                                                    }}
                                                    disabled={quantity === 1 ? true : false}
                                                    >
                                                        <BsChevronLeft size={20}/>
                                                    </button>
                                                    <strong className='px-1'>{quantity}</strong>
                                                    <button className='outline-none rounded px-1'
                                                    onClick={() => {addToCart(item)}}
                                                    >
                                                        <BsChevronRight size={20}/>
                                                    </button>
                                                </aside>
                                            </li>
                                            {
                                                item !== cart[-1] && cart.length > 1 && <hr className='w-full border-[1px]'/>
                                            }
                                        </>

                                    )
                                })
                            }
                        </ul>
                        <footer className=' w-72 absolute bottom-8 flex justify-center items-start gap-4 flex-col'>
                            <h4 className='text-xl font-medium'>Total: <strong>{
                                (productValor as number[]).reduce((acc, el) => acc + el, 0)
                            }</strong> </h4>
                            <div className="flex justify-around items-center gap-3 w-full ">
                                <button onClick={()=> clearCart()} className='flex items-center justify-center gap-1 btnCleanCart rounded p-2 hover:scale-105 hover:shadow-md'>
                                    Vaciar Carrito   
                                    <BsCartX/>
                                </button>
                                <button className=' flex items-center justify-center gap-1 btnPay p-2 rounded'>
                                    Pagar
                                    <BsCash/>
                                </button>
                            </div>
                        </footer>
                    </>
                )
                :
                <>
                    <h3 className='text-center'>No hay productos en el carrito</h3>
                </>
            }
        </section>
    </aside>
  )
}

export default Cart