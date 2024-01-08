const express=require("express")
const mongoose=require("mongoose")
const userRouter=require("./route/user")
const authorisation=require("./middleware/authorisation")
const bookRouter=require("./route/book")
const orderRouter=require("./route/order")
const app=express()
app.use(express.json())

require('dotenv').config()

app.use("/api",userRouter)
app.use(authorisation)
app.use("/api",bookRouter)
app.use("/api",orderRouter)



app.get("/",async(req,res)=>{
    return res.status(200).send({message:`Hello, this is the base endpoint!`})
})


app.listen(6300,()=>{

    mongoose.connect("mongodb+srv://abhishek:abhishek@cluster0.czs9tbb.mongodb.net/masaiLibreary?retryWrites=true&w=majority")
    console.log("server is running at the post")

})