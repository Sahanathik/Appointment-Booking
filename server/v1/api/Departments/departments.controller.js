
import Service from './departments.service.js';


async function addDepartments(req,res,next){
    console.log("Controller")

    await Service.addDepartments(req.body, res, function(result){
            return res.json({message : result.message})

    })
}

async function getAllDepartments(req,res,next){
    console.log("Controller")

    await Service.getAllDepartments(req.body, res, function(result){
            return res.json({message : result.message})

    })
}

export default {
    addDepartments,
    getAllDepartments
}