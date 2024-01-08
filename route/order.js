const express=require("express")
const orderRouter=express()
const orderModel=require("../model/ordermodel")


orderRouter.get("/orders",async(req,res)=>{
    try{
        let data= await orderModel.find()
        res.status(200).send(data)
    }
    catch(err){
        res.send(err)
    }
})

orderRouter.post("/order",async(req,res)=>{
    try{
        let data=await new orderModel(req.body)
        data.save()
        res.status(201).send({"message":"order place"})
    }
    catch(err){
        res.send({"error":"some error occur"})

    }
})


module.exports=orderRouter

