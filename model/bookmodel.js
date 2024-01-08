const mongoose=require("mongoose")

let schema=mongoose.Schema({
   
       
    title: String,
    author: String,
    category: String,
    price: Number,
    quantity: Number
      
    
})

let bookModel=mongoose.model("Book",schema)

module.exports=bookModel