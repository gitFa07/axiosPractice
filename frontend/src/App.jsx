import React from "react"
import { useEffect } from "react"
import { useState } from "react"

import axios from "axios"

const App = () => {
  const [products, error, loading] = customReactQuery("/api/products")

  if (error) {
    return <h1>Error Has Occured</h1>
  }

  if (loading) {
    return <h1>Loading . . .</h1>
  }

  return (
    <>
      <div>A</div>
      <h2>Number of products are: {products.length}</h2>
    </>
  )
}

export default App

const customReactQuery = (urlPath) => {
  const [error, setError] = useState(false)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get("/api/products")
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()
  }, [])

  return [products, error, loading]
}
