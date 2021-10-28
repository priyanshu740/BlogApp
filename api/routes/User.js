import User from '../model/User.js'
import express from 'express'

const router = express.Router()

//register
router.post("/register",async (req,res) => {
    try{
        const newUser = new User({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        })

        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

export default router