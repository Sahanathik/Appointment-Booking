import Service from './app.service.js'

async function addAppSettings(req,res,next){
    await Service.addAppSettings(req, res, function(result){
        return res.json({message : result.message})
    })
}

async function getAppSettings(req,res,next){
    await Service.getAppSettings(req, res, function(result){
        return res.json({message : result.message})
    })
}
export default {
    addAppSettings,
    getAppSettings
}