// const dns = require("dns")
import dns from "dns"
dns.setServers(["8.8.8.8", "1.1.1.1"])

// const mongoose = require("mongoose")
import mongoose from "mongoose"

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI)

  console.log("Connected to DB")
}

export { connectDB }
