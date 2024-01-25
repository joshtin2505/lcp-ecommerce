import Image from "next/image"
import './ProductCard.css'
import { BsCart } from "react-icons/bs"
interface ProductCardProps {
    imgSrc: string
    price: number
    title:string
    description:string
    tags: string[]
    id: number
}
function ProductCard({imgSrc, price, title, tags, id, description}: ProductCardProps) {
  return (

    <div className="w-60 h-auto shadow">
        <figure className="w-full productImgCont ">
            <Image className="aspect-[114/74] object-cover rounded-tl rounded-tr transition-all hover:scale-110 hover:rounded" src={imgSrc} alt={title} width={240} height={240}/>
        </figure>
        <section className="w-full p-4 py-2 rounded-bl-md rounded-br-rounded-bl-md">
            <h5 className="text-lg font-medium">{title}</h5>
            <span>${price}</span>
            <p>{description}</p>
            <hr className="w-full my-1"/>
            <h6 className="font-medium">Tags</h6>
            <footer className="mb-8 flex gap-1 flex-wrap">
                {
                    tags.slice(0,5).map((tag) => <button className="tag p-2 py-1 rounded-md capitalize transition-all hover:shadow-md" key={tag}>{tag}</button>)
                }
            </footer>
            <div className="w-full flex justify-center items-center relative">
                <button className="btnAddToCard p-2 rounded-md absolute bottom-[-24px] transition-all hover:scale-105 hover:shadow-xl active:scale-100 flex gap-1 items-center text-center">
                Añadir al carrito 
                <BsCart size={20}/>
                </button>
            </div>
        </section>
    </div>
  )
}

export default ProductCard