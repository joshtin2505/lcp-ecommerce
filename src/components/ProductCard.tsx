'use client'
import Image from "next/image"
import './ProductCard.css'
import { BsCart, BsCartX } from "react-icons/bs"
import { Product } from "@/types.d"
import { useCart } from "@/hooks/useCart"
import { useEffect, useState } from "react"

function ProductCard({product, cartIsOpen}: {product: Product, cartIsOpen: boolean}) {
    const {imgSrc, price, tags, id, description, product: title} = product // destructuracion de las propiedades del producto

    const {addToCart, inCart, removeFromCart, setOpenCart, openCart} = useCart() // destructuracion de las funciones del hook useCart

    const [productInCart, setProductInCart] = useState(inCart(id)) // estado para saber si el producto esta en el carrito
    const [isClient, setIsClient] = useState(false) // estado para saber si el componente esta montado

    const handleClickToCart = () => { // funcion para añadir al carrito
        addToCart(product)
    }
    const handleClickRemoveFromCart = () => { // funcion para quitar del carrito
        removeFromCart(product)
    }

    useEffect(() => { // efecto para saber si el componente esta montado
        setIsClient(true)
    },[])
    useEffect(() => { // efecto para cambiar el estado 
        setProductInCart(inCart(id))
    }, [inCart, id])

    return (
        <div className="w-60 h-auto shadow">
            <figure className="w-full  ">
                <Image className="productImage" src={imgSrc} alt={title} width={240} height={240}/>
            </figure>
            <section className="w-full p-4 py-2 rounded-bl-md rounded-br-rounded-bl-md">
                <h5 className="text-lg font-medium">{title}</h5>
                <span>${price}</span>
                <p>{description}</p>
                <hr className="w-full my-1"/>
                <h6 className="font-medium">Tags</h6>
                <div className="mb-8 flex gap-1 flex-wrap">
                    {
                        tags.slice(0,5).map((tag) => <button className="tag p-2 py-1 rounded-md capitalize transition-all hover:shadow-md" key={tag}>{tag}</button>)
                    }
                </div>
                <footer className="w-full flex justify-center items-center relative">
                    {
                        isClient && productInCart ? 
                        <div className="flex w-full absolute bottom-[-24px] gap-3 justify-center items-center">
                            <button 
                            onClick={handleClickRemoveFromCart}
                            className="btnRemoveFromCart p-2 rounded-md  transition-all hover:scale-105 hover:shadow-xl active:scale-100 flex gap-1 items-center text-center">
                                Quitar
                                <BsCartX size={20}/>
                            </button>
                            <button
                            onClick={() => setOpenCart(true)}
                            className="btnGoToCart p-2 rounded-md transition-all hover:scale-105 hover:shadow-xl active:scale-100 flex gap-1 items-center text-center disabled:opacity-60 disabled:hover:scale-100 disabled:hover:shadow-md disabled:active:scale-100 disabled:cursor-not-allowed"
                            disabled={cartIsOpen}
                            >
                                Ir
                                <BsCart size={20}/>
                            </button>
                        </div>
                        : 
                        <button 
                        onClick={handleClickToCart}
                        className="btnAddToCart p-2 rounded-md absolute bottom-[-24px] transition-all hover:scale-105 hover:shadow-xl active:scale-100 flex gap-1 items-center text-center">
                        Añadir al carrito 
                        <BsCart size={20}/>
                        </button>
                    }
                </footer>
            </section>
        </div>
     )
}

export default ProductCard