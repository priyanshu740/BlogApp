import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: false,
      },
      username: {
        type: String,
        required: true,
      },
      categories: {
        type: Array,
        required: false,
      },
},
{timestamp:true}
)

const Post = mongoose.model("post",postSchema)
export default Post