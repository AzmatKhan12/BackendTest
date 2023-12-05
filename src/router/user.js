const express= require("express");
const router = new express.Router();
const UserSchema = require("../models/userSchema");

// create a post ....

router.post("/users",async(req,res)=>{
      try {
        const user = new UserSchema(req.body);
        const createUSer = await user.save();
        res.status(201).send(createUSer)
      } catch (error) {
        res.status(400).send(error)
      } 
   
});

// get the user data from the db by find Methods;

router.get("/users", async(req,res)=>{
    try {
       
        const userData = await UserSchema.find();
        res.send(userData);
    } catch (error) {
        res.status(500).send(error)
    }
    
});

// get the user data indivisually by using findById methods

router.get("/users/:id", async(req,res)=>{
    const _id = req.params.id;

    try {
        const userData = await UserSchema.findById({_id :_id});
        if(!userData){
            return res.status(400).send()
        }
        else{
            res.send(userData)
        }
    } catch (error) {
        res.status(500).send(error)
    }

});

// update the data by using patch method;

router.patch("/users/:id",async(req,res)=>{
   
    const _id = req.params.id;

    try {
        const userUpdate = await UserSchema.findByIdAndUpdate({_id :_id},req.body,{
            new : true
        })
        
        res.send(userUpdate)
        
    } catch (error) {
        res.status(500).send(error)
    }
});


router.delete("/users/:id",async(req,res)=>{
   
    const _id = req.params.id;

    try {
        const userUpdate = await UserSchema.findByIdAndDelete({_id :_id})
        if(!_id){
            res.status(404).send()
        }
        else{
            res.send(userUpdate)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports= router;