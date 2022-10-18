import Service from './admin.service.js';

async function Login(req,res,next){
    console.log("Controller")

    await Service.Login(req.body, res, function(result){
      
        
        return res.json({message : result.message , })

    })


}




export default {
    Login
   
}