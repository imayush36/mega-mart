const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/megamart")
.then(() => {
  console.log("MongoDB Connected")
})
.catch((err) => {
  console.log(err)
})

app.get("/", (req, res) => {
  res.send("API Running")
})

app.listen(5000, () => {
  console.log("Server running on 5000")
})