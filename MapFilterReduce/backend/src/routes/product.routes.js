import express from "express"

import {
  createProductController,
  getAllProductsController,
} from "../controller/product.controller.js"

const productRouter = express.Router()

productRouter.post("/createProduct", createProductController)

productRouter.get("/getAllProducts", getAllProductsController)

export { productRouter }
