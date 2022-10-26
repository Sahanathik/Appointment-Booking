import Service from './specialist.service.js'

async function addSpecialist(req,res){
    await Service.addSpecialist(req.body, res, function(result){
        return res.json({message : result.message})
    })
}

async function getAllSpecialist(req,res){
    await Service.getAllSpecialist(req.body, res, function(result){
        return res.json({message : result.message})
    })
}

async function getSingleSpecialist(req,res){
    await Service.getSingleSpecialist(req.body, res, function(result){
        return res.json({message : result.message})
    })
}


async function updateDoctorWithImg(req,res){
    await Service.updateDoctorWithImg(req, res, function(result){
        return res.json({message : result.message})
    })
}

async function updateDoctorWithoutImg(req,res){
    await Service.updateDoctorWithoutImg(req, res, function(result){
        return res.json({message : result.message})
    })
}



export default {
    addSpecialist,
    getAllSpecialist,
    getSingleSpecialist,
    updateDoctorWithImg,
    updateDoctorWithoutImg,

}