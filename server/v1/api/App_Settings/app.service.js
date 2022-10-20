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

export default {
    addAppSettings,
}