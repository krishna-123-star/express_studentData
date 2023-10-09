const errorHandler=(error,req,res,next)=>{
    
    res.status(500);
    res.send({"error":true,
      "message":"Error occurred"});
}
module.exports=errorHandler;
