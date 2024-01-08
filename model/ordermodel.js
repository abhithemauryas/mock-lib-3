const mongoose=require("mongoose")

let schema=mongoose.Schema({
     
    user : { type:mongoose.Schema.Types.ObjectId, ref: 'user' },
    books : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    totalAmount: Number
    
})

let orderModel=mongoose.model("Order",schema)

module.exports=orderModel