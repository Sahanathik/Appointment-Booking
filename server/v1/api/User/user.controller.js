import Service from './user.service.js';

async function register(req,res,next){
    console.log("Controller")

    await Service.register(req.body, res, function(result){
      
        
        return res.json({message : result.message})

    })


}

export default {
    register
}
