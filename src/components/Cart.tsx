import { useCart } from '@/hooks/useCart'
import './Cart.css'
import ProductCard from './ProductCard'
import { BsCartX, BsCash, BsX } from 'react-icons/bs'
function Cart() {
    const {cart} = useCart()
  return (
    <aside className="fixed h-screen top-0 right-0 py-5 cartContainer z-20 gap-3 grid  px-9">
        <header className='flex w-full justify-center items-center rounded-md shadow-md'>
            <h2 className='txt-deg-primary drop-shadow-lg text-6xl xxs:text-5xl font-semibold'>
                Cart
            </h2>
            <button className='absolute right-2 closeBtn rounded-full p-1 transition-all hover:scale-105'>
                <BsX size={25}/>
            </button>
        </header>
        <section className='rounded-md py-3 px-6 itemsContainer shadow-md overflow-y-auto'>
            <ul className='flex flex-col gap-6'>
                {
                    cart.map((item) => {
                        return <ProductCard key={item.id} product={item}/>
                    })
                }
            </ul>
            <h4>Total: </h4>
            <button className=' flex items-center justify-center gap-1'>
                Vaciar Carrito  
                <BsCartX/>
            </button>
            <button className=' flex items-center justify-center gap-1'>
                Pagar
                <BsCash/>
            </button>
        </section>
    </aside>
  )
}

export default Cart