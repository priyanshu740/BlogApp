import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import multer from 'multer'
import authRoute from './routes/Authentication.js'
import userRoute from './routes/User.js'
import postRoute from './routes/Post.js'
import categoryRoute from './routes/Category.js'
import cors from 'cors'

const app = express()

dotenv.config()
app.use(cors())
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

const storage =  multer.diskStorage({
  destination:(req,file,cb) => {
      cb(null,'images')
  },
  filename : (req,file,cb) => {
    cb(null,"image.jpeg")

  }
})

const upload = multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res) => {
  res.status(200).json("file has been uploaded")
}
)

app.use("/api/auth",authRoute)
app.use("/api/user",userRoute)
app.use("/api/post",postRoute)
app.use("/api/category",categoryRoute)

app.listen(PORT , () => console.log(`backend started on ${PORT}` ))