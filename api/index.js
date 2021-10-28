import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRoute from './routes/User.js'

const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth",UserRoute)

app.listen(PORT , () => console.log(`backend started on ${PORT}` ))