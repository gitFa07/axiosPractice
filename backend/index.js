import express from "express"

const app = express()

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      name: "chair wooden",
      price: 80,
      image: "https://placehold.co/940x650?text=Chair+Wooden",
    },
    {
      id: 3,
      name: "sofa grey",
      price: 450,
      image: "https://placehold.co/940x650?text=Sofa+Grey",
    },
    {
      id: 4,
      name: "lamp floor",
      price: 65,
      image: "https://placehold.co/940x650?text=Lamp+Floor",
    },
    {
      id: 5,
      name: "bookshelf white",
      price: 150,
      image: "https://placehold.co/940x650?text=Bookshelf+White",
    },
    {
      id: 6,
      name: "bed frame queen",
      price: 320,
      image: "https://placehold.co/940x650?text=Bed+Frame+Queen",
    },
    {
      id: 7,
      name: "desk oak",
      price: 180,
      image: "https://placehold.co/940x650?text=Desk+Oak",
    },
    {
      id: 8,
      name: "wardrobe pine",
      price: 275,
      image: "https://placehold.co/940x650?text=Wardrobe+Pine",
    },
  ]

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search),
    )
    res.send(filterProducts)
    return
  }

  setTimeout(() => {
    res.send(products)
  }, 300)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
