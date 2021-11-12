import express from 'express'
import bcrypt from 'bcrypt'
import User from '../model/User.js'
import router from './Authentication.js'

const route = express.Router()

//GET
route.get("/:id", async (req,res) => {
    try{
        const user = await User.findById(req.params.id)
        // const {password,...others} = user._doc
        res.status(200).json(user)
    }catch(err){
        console.log(err);
    }
})

//UPDATE
route.put("/:id", async (req,res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password,salt)
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            res.status(200).json(updatedUser)
        }catch(err){
            console.log(err);
        }
    }else{
        res.status(401).json("You Can not update the user")
    }
})

//DELETE
route.delete("/:id",async (req,res) => {
    if(req.body.userId === req.params.id){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("user has been deleted successfylly")
        }catch(err){
            console.log(err);
        }
    }else{
        res.status(401).json("you can delete only your acccount")
    }
})

export default route