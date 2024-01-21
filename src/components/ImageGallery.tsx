import { useEffect, useState } from 'react'
import './ImageGallery.css'
import { motion, useAnimate } from 'framer-motion'

type imgGalery = {id: number, imgSrc: string, product: string}
type GaleryArray = imgGalery[]
function ImageGallery() {
    const galery = [
        {
            id: 1,
            imgSrc: "https://lacasitadepapelco.com/wp-content/uploads/2023/11/IMG_20210522_153932115_2-scaled.jpg",
            product: "Mandala"
        },
        {
            id: 2,
            imgSrc: "https://lacasitadepapelco.com/wp-content/uploads/2023/11/IMG_20160822_132137626-2048x1152.jpg",
            product: "Caja"
        },
        {
            id: 3,
            imgSrc: "https://lacasitadepapelco.com/wp-content/uploads/2023/11/IMG_20160823_113635-2048x1181.jpg",
            product: "Album"
        },
        {
            id: 4,
            imgSrc: "https://lacasitadepapelco.com/wp-content/uploads/2023/11/IMG_20160814_143156685-2048x1152.jpg",
            product: "Libretas"
        },
        {
            id: 5,
            imgSrc: "https://lacasitadepapelco.com/wp-content/uploads/2023/11/IMG_20180601_130447389-2048x1536.jpg",
            product: "Kit de mesa"
        },
        {
            id: 6,
            imgSrc: "https://lacasitadepapelco.com/wp-content/uploads/2023/11/IMG_20160822_135345852-scaled.jpg",
            product: "Card"
        }
    ]
    const [array, setArray] = useState<GaleryArray>(galery)
    const [scope, animate] = useAnimate()

    const handleClick = async (action: boolean) => {
        const newArray = newPosition({array: array, action: action})
        await animate(scope.current, { opacity: 0 })
        setArray(newArray)
    }
    useEffect(()=>{
        animate(scope.current,{ duration: 0.1, opacity: 1 })
    },[array]) 
    return (
    <div className="w-3/5 flex h-full justify-center items-center ">
        <button onClick={() => handleClick(false)} className='text-2xl font-bold'>{'<'}</button>
        <motion.figure className="relative w-96 h-96" ref={scope}>
            {
                array.slice(0,4).map((item, i) => (
                <motion.img className={'absolute w-96 aspect-square cursor-pointer img img' + i + ' ' + rotate(i)} 
                key={item.id} 
                src={item.imgSrc} 
                alt={item.product}  
                style={{zIndex: i * -1}} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                
                />

                ))
            }
            
        </motion.figure>
        <button onClick={() => handleClick(false)} className='text-2xl font-bold'>{'>'}</button>
    </div>
  )
}
const newPosition = ({action, array}: {action: boolean, array: GaleryArray}): GaleryArray => {
    const localArray = [...array]
    if(action === true) {
        const pop = localArray.pop()
        pop && localArray.unshift(pop)
        const newArray = localArray
        return newArray
    }
    else if (action === false){
        const shift = localArray.shift()
        shift && localArray.push(shift)
        const newArray = localArray
        return newArray
    }
    return array
}
function rotate (i: number) {
    if (i === 0) return ''
    else if (i === 1) return 'rotate-[-10deg]'
    else if (i === 2) return 'rotate-[-20deg]'
    else if (i === 3) return 'rotate-[-30deg]'
}
export default ImageGallery