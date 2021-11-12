import express from 'express'
import Post from '../model/Post.js'
import router from './Authentication.js'

const route = express.Router()

//CREATE
route.post("/", async (req,res) => {
    const newPost = new Post(req.body)
    try{
       const savedPost = await newPost.save()
       res.status(200).json(savedPost)
    }catch(err){
        console.log(err);
    }
})

//UPDATE
route.put("/:id" , async (req,res) => {
    try{
        const post = await Post.findbyId(req.params.id)
        if(post.username === req.params.id) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
                res.status(200).json(updatedPost)
            }catch(err){
                console.log(err);
            }
        }else{
            console.log("enter a valid username");
        }
    }catch(err){
        console.log(err);
    }
})

//DELETE
route.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET
route.get("/:id",async (req,res) => {
  try{
    const singleUser = await Post.findById(req.params.id)
    res.status(200).json(singleUser)
  }catch(err){
    console.log(err);
  }
})

//GETALL
route.get("/",async (req,res) => {
  const username = req.query.user;
  const categoryname = req.query.cat;
  try {
    let posts;
    if(username){
      posts = await Post.find({username:username}) 
    }else if(categoryname){
      posts = await Post.find({category:{
        $in:[categoryname]
      },
    }) 
    }else{
      posts = await Post.find()
    }
    res.status(200).json(posts)
  }catch(err){
    console.log(err);
  }
})

export default route