const express=require("express")
const bookRouter=express.Router()
const bookModel=require("../model/bookmodel")
const userRouter = require("./user")



bookRouter.get("/books",async(req,res)=>{
    try{
        let data= await bookModel.find()
        res.status(200).send(data)
    }
    catch(err){
        res.send(err)
    }
})


bookRouter.post("/books",async(req,res)=>{
    try{
        let data=await new bookModel(req.body)
        data.save()
        res.status(201).send({"message":"book added"})
    }
    catch(err){
        res.send({"error":"some error occur"})

    }
})


bookRouter.get("/books/:id",async(req,res)=>{
    let {id}=req.params
    console.log(id)
    try{
        let data= await bookModel.find({_id:id})
        res.status(200).send(data)
    }
    catch(err){
        res.send(err)
    }
})


bookRouter.patch("/books/:id",async(req,res)=>{
    let {id}=req.params
    console.log(id)
    try{
        let data= await bookModel.findByIdAndUpdate({_id:id},req.body)
        
        res.status(204).send({"message":"data updated"})
    }
    catch(err){
        res.send(err)
    }
})

bookRouter.delete("/books/:id",async(req,res)=>{
    let {id}=req.params
    console.log(id)
    try{
        let data= await bookModel.findByIdAndDelete({_id:id})
        
        res.status(202).send({"message":"data deleted"})
    }
    catch(err){
        res.send(err)
    }
})



module.exports=bookRouter