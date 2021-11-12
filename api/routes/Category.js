import express from 'express'
import Category from '../model/Category.js'

const router = express.Router()

router.post("/",async (req,res) => {
    const newCategory = new Category(req.body)
    try {
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    }catch(err){
        console.log(err);    
    }
})

router.get("/",async (req,res) => {
 
    try {
        const Category = await Category.find()
        res.status(200).json(Category)
    }catch(err){
        console.log(err);    
    }
})

export default router