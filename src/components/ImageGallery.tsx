import './ImageGallery.css'
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
  return (
    <div className="w-3/5 flex h-full justify-center items-center ">
        <figure className="relative w-96 h-96">
            {
                galery.map((item, i) => (
                <img className={'absolute w-96 aspect-square cursor-pointer img img' + i + ' ' + rotate(i)} key={item.id} src={item.imgSrc} alt={item.product} />
                ))
            }
        </figure>
    </div>
  )
}

function rotate (i: number) {
    if (i === 0) return ''
    else if (i === 1) return 'rotate-6'
    else if (i === 2) return 'rotate-12'
    else if (i === 3) return 'rotate-45'
}
export default ImageGallery