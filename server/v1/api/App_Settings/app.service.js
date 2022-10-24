import appSettingsSchema from './app.model.js'

async function addAppSettings(req,res,next){
    try {

        console.log(req.file)
        let data = appSettingsSchema(req.body);
        data.logo = req.file.filename
        let result = await data.save();
        return res.json({status : true, message : "app settings are added", result })

    } catch (error) {
        return res.json({status : false, error })
    }
}

async function getAppSettings(req,res,next){
    try {
        let data = await appSettingsSchema.find().exec()
      
        if(data){
            return res.json({status : true, message: "App settings fetched", data }) 
        } else {
            return res.json({status : false, message: "data not found", data }) 
        }

    } catch (error) {
        return res.json({status : false, error })
    }
}


export default {
    addAppSettings,
    getAppSettings,
}