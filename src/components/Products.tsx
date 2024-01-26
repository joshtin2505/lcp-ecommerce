import ProductList from '../mocks/Products.json'
import ProductCard from './ProductCard'
import './Products.css'
function Products() {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-6 productsSection overflow-y-scroll lg:px-28 px-8 py-28 relative">
      <header className='flex justify-center items-center w-full absolute top-0 py-5'>
        <h2 className="text-5xl font-semibold txt-deg-primary drop-shadow-md  " id="products">Productos</h2>
      </header>
      <div className="flex flex-wrap justify-center items-center gap-8 productsContainer">
        {
            ProductList && ProductList.map((item) => {
              const {description,id,imgSrc,price,product,tags} = item
              return <ProductCard 
                      title={product}
                      description={description}
                      id={id}
                      imgSrc={imgSrc}
                      price={price}
                      tags={tags}
                      key={id}
                      />
            })
          }
      </div>
    </section>
  )
}

export default Products