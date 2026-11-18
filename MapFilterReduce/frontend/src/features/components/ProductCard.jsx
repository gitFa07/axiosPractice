import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <h1>Product Serial Number: {product.serialNumber}</h1>
    </div>
  )
}

export default ProductCard
