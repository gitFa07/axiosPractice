import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    serialNumber: {
      type: Number,
      unique: true,
    },
    productStatus: {
      type: String,
      emum: {
        vlaues: ["AVAILABLE", "UNAVAILABLE"],
      },
    },
  },
  {
    timestamps: true,
  },
)

const productModel = mongoose.model("product", productSchema)

export { productModel }
