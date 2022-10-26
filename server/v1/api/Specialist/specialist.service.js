import specialistSchema from './specialist.model.js';
import moment from 'moment';

// async function addSpecialist(req,res,next){
//     try {

//             let file = req.file.filename;
//             console.log("proceed", file)
//             console.log(req.body)
//             let data = await specialistSchema.findOne({specialist_name : req.body.specialist_name}).exec();
//         if(data){
//             return res.json({status : false, message : "Specialist name already exists", data })
//         } else {
//             let details = new specialistSchema(req.body);
//             details.image = req.file.filename
//             let result = await details.save();
//             return res.json({status : true, message : "Specialist name added successfully", data :result })
//         }

        
//     } catch (error) {
//         return res.json({status : false, message : error })
//     }
// }

async function addSpecialist(req,res,next){
    try {

            let file = req.file.filename;
            console.log("proceed", file)
            console.log(req.body)
            let data = await specialistSchema.findOne({specialist_name : req.body.specialist_name}).exec();
        if(data){
            // return res.json({status : false, message : "Specialist name already exists", data })
            let details = await specialistSchema.findOneAndUpdate({specialist_name : req.body.specialist_name}, {$push:{available_slot:req.body.available_slot}}, {new:true}).exec();
            if(details){
                return res.json({status : false, message : "Specialist slot added", details })
            }
                
                
        } else {
            let details = new specialistSchema(req.body);
            details.image = req.file.filename
            let result = await details.save();
            return res.json({status : true, message : "Specialist name added successfully", data :result })
        }

        
    } catch (error) {
        return res.json({status : false, message : error })
    }
}


async function getAllSpecialist(req,res,next){
    try {
        let data = await specialistSchema.find().exec();
        return res.json({status : true, message : "Specialist details are fetched", data })
    } catch (error) {
        return res.json({status : false, error })
    }
}


async function getSingleSpecialist(req,res,next){
    try {
        let data = await specialistSchema.findOne({specialist_id:req.specialist_id}).exec();
        console.log(data.available_slot.slot1)
        return res.json({status : true, message : "Specialist details are fetched", data })
    } catch (error) {
        return res.json({status : false, error })
    }
}


export default {
    addSpecialist,
    getAllSpecialist,
    getSingleSpecialist,
}