import { useEffect, useState } from 'react'
import './ImageGallery.css'
import { motion, useAnimate } from 'framer-motion'
import { BsChevronRight, BsChevronLeft} from 'react-icons/bs'
import galery from '../mocks/Products.json'
type imgGalery = {id: number, imgSrc: string, product: string}
type GaleryArray = imgGalery[]
function ImageGallery() {
    const [array, setArray] = useState<GaleryArray>(galery)
    const [scope, animate] = useAnimate()

    const handleClick = async (action: boolean) => {
        const newArray = newPosition({array: array, action: action})
        await animate(scope.current, { opacity: 0 })
        setArray(newArray)
    }
    useEffect(()=>{
        animate(scope.current,{ duration: 0.1, opacity: 1 })
    },[array, animate, scope]) 
    return (
    <div className="w-2/4 md:flex hidden h-full justify-center items-center gap-20 ">
        <button onClick={() => handleClick(false)} className='text-2xl btnImageGalery'>
            <BsChevronLeft  height={50} width={50}/>
        </button>
        <motion.figure className="relative w-96 h-96" ref={scope}>
            {
                array.slice(0,4).map((item, i) => (
                <motion.img className={'absolute w-96 aspect-square object-cover cursor-pointer img img shadow-md shadow-black/30 ' + i + ' ' + rotate(i)} 
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
        <button onClick={() => handleClick(false)} className='text-2xl btnImageGalery'>
            <BsChevronRight  height={50} width={50}/>
        </button>
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