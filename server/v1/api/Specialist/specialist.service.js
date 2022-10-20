import specialistSchema from './specialist.model.js';
import moment from 'moment';

async function addSpecialist(req,res,next){
    try {

        //import moment to format the date
        let givenDate = moment(new Date(req.available_date)).format('YYYY-MM-DD');
        let currentDate = moment(new Date()).format('YYYY-MM-DD')

        // let date = moment().format('MM/DD/YYYY');

        if (givenDate > currentDate){
            console.log("proceed")
            let data = await specialistSchema.findOne({specialist_name : req.specialist_name}).exec();
        if(data){
            return res.json({status : false, message : "Specialist name already exists", data })
        } else {
            let details = new specialistSchema(req);
            let result = await details.save();
            return res.json({status : true, message : "Specialist name added successfully", data :result })
        }
        } else {
            console.log("pls give future date")
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
        let data = await specialistSchema.findOne({id:req.specialist_id}).exec();
        return res.json({status : true, message : "Specialist details are fetched", data })
    } catch (error) {
        return res.json({status : false, error })
    }
}

export default {
    addSpecialist,
    getAllSpecialist,
    getSingleSpecialist

}