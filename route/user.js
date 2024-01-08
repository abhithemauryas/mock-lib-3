const express=require("express")
const userRouter=express.Router()
let userModel=require("../model/usermodel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



userRouter.post("/register",async(req,res)=>{
    let {email,password,name,isAdmin}=req.body
    bcrypt.hash(password, 10, function(err, hash) {
       if(hash){
        let data= new userModel({email,password:hash,name,isAdmin})
        data.save()
        res.status(201).send(data)

       }
       else{
        res.send("some error occur")
       }
    });
})


userRouter.post("/login",async(req,res)=>{
    let {email,password}=req.body
    let userfind=await userModel.findOne({email})


    try{
        bcrypt.compare(password, userfind.password, function(err, result) {
        
            if(result){
                let token=jwt.sign({
                    data: 'foobar'
                  }, 'secret', { expiresIn: '1h' });

                  res.status(201).send({"token":token})

            }
            else{
                res.send("user is not varified")
            }
        });
      
    }
    catch(err){
        res.send(err)
    }
  
   

})

module.exports=userRouter