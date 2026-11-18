import { useEffect, useState } from "react"
import ProductCard from "./features/components/ProductCard"
import axios from "axios"

const App = () => {
  const [products, setProducts] = useState([])

  async function fetchProducts() {
    try {
      const res = await axios.get("/api/v1/getAllProducts")
      setProducts(res.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  return (
    <div className="mainBody">
      {/* <div className="cardBox">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />
        })}
      </div> */}

      <ul className="cardBox">
        {products.map((product) => (
          <li key={product._id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <button onClick={fetchProducts}>Load Products</button>
    </div>
  )
}

export default App
