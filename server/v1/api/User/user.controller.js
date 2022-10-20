import Service from './user.service.js';

async function register(req,res,next){
    console.log("Controller")

    await Service.register(req.body, res, function(result){
        return res.json({message : result.message})

    })


}

async function login(req,res,next){
    console.log("Controller")
    await Service.login(req.body, res, function(result){
        return res.json({message : result.message})
    })
}

async function userlogin(req,res,next){
    console.log("Controller")
    await Service.login(req.body, res, function(result){
        return res.json({message : result.message})
    })
}

async function appointment(req,res,next){
    console.log("Controller")
    await Service.login(req.body, res, function(result){
        return res.json({message : result.message})
    })
}



export default {
    register,
    login,
    userlogin,
    appointment
}
