import React, { useEffect, useState } from "react"
import ProductCard from "./features/components/ProductCard"
import axios from "axios"

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("/api/v1/getAllProducts")
        setProducts(res.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="mainBody">
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />
      })}
    </div>
  )
}

export default App
