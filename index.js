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

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("DB Connected")
    } catch (error) {
        console.log(error.message)
    }

    console.log(`server is running on port ${process.env.port}`)
})