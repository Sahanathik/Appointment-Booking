import Service from './specialist.service.js'

async function addSpecialist(req,res){
    await Service.addSpecialist(req.body, res, function(result){
        return res.json({message : result.message})
    })
}

export default {
    addSpecialist
}