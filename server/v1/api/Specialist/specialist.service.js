import specialistSchema from './specialist.model.js';

async function addSpecialist(req,res,next){
    try {
        let data = await specialistSchema.findOne({specialist_name : req.specialist_name}).exec();
        if(data){
            return res.json({status : false, message : "Specialist name already exists", data })
        } else {
            let details = new specialistSchema(req);
            let result = details.save();
            return res.json({status : true, message : "Specialist name added successfully", data })
        }
    } catch (error) {
        return res.json({status : false, message : error })
    }
}

export default {
    addSpecialist
}