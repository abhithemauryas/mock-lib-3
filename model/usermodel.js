const mongoose=require("mongoose")

let schema=mongoose.Schema({
     
        name: String,
        email: String,
        password: String,
        isAdmin: Boolean
       
})

let userModel=mongoose.model("user",schema)

module.exports=userModel