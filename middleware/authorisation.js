var jwt = require('jsonwebtoken');

const authorisation=(req,res,next)=>{
    let token=req.headers.authorization
    jwt.verify(token, 'secret', function(err, decoded) {
        if(decoded){
            next()
        }
        else{
            res.send({"error":"authorisation fail"})
        } 
      });


}


module.exports=authorisation