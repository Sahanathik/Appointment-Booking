import Service from "./Specialist_day_slot.service.js"

async function addDaySlot(req,res){
    await Service.addDaySlot(req, res, function(result){
        return res.json({message : result.message})
    })
}

async function getData(req,res){
    await Service.getData(req, res, function(result){
        return res.json({message : result.message})
    })
}


export default { 
    addDaySlot,
    getData
}