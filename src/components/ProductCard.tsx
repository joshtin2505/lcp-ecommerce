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
        <div className="productCardContainer ">
            <figure className="w-full">
                <Image className="productImage" src={imgSrc} alt={title} width={240} height={240}/>
            </figure>
            <section className="productSectContainer">
                <h5 className="text-lg font-medium">{title}</h5>
                <span>${price}</span>
                <p>{description}</p>
                <hr className="w-full my-1"/>
                <h6 className="font-medium">Tags</h6>
                <div className="mb-8 flex gap-1 flex-wrap">
                    {
                        tags.slice(0,5).map((tag) => <button className="tag" key={tag}>{tag}</button>)
                    }
                </div>
                <footer className="">
                    {
                        isClient && productInCart ? 
                        <div className="inCartBtnCont">
                            <button 
                            onClick={handleClickRemoveFromCart}
                            className="btnRemoveFromCart ">
                                Quitar
                                <BsCartX size={20}/>
                            </button>
                            <button
                            onClick={() => setOpenCart(true)}
                            className="btnGoToCart "
                            disabled={cartIsOpen}
                            >
                                Ir
                                <BsCart size={20}/>
                            </button>
                        </div>
                        : 
                        <button 
                        onClick={handleClickToCart}
                        className="btnAddToCart">
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