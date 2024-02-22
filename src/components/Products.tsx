import { useCart } from "@/hooks/useCart"
import ProductList from "../mocks/Products.json"
import ProductCard from "./ProductCard"
import "./Products.css"
function Products() {
  const { openCart } = useCart()
  return (
    <section className="productsSection">
      <header className="productsSecHeader">
        <h2 className="txt-deg-primary" id="products">
          Productos
        </h2>
      </header>
      <div className="productsContainer">
        {ProductList &&
          ProductList.map((item) => {
            return (
              <ProductCard product={item} cartIsOpen={openCart} key={item.id} />
            )
          })}
      </div>
    </section>
  )
}

export default Products
