import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    name:String,
    required:true,
    unique:true
},
{timestamps:true}
)

const Category  = mongoose.model("category",CategorySchema)
export default Category