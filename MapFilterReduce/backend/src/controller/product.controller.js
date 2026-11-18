import { productModel } from "../models/product.model.js"

async function createProductController(req, res) {
  const { productName, productPrice, serialNumber, productStatus } = req.body

  try {
    const product = await productModel.create({
      productName,
      productPrice,
      serialNumber,
      productStatus,
    })

    res.status(201).json({
      message: "Product created Successfully",
      product,
    })
  } catch (error) {
    console.log(error)
  }
}

async function getAllProductsController(req, res) {
  try {
    const products = await productModel.find()

    res.status(200).json({
      message: "All products received successfully",
      products,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error.message,
    })
  }
}

export { createProductController, getAllProductsController }
