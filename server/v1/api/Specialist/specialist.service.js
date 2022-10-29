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


//NEW CHANGES TO ADD DAY AND SLOT
// async function addSpecialist(req,res,next){
//     try {

//             let file = req.file.filename;
//             console.log("proceed", file)
//             console.log(req.body)
//             let data = await specialistSchema.findOne({specialist_name : req.body.specialist_name}).exec();
//         if(data){
//             // return res.json({status : false, message : "Specialist name already exists", data })
//             let details = await specialistSchema.findOneAndUpdate({specialist_name : req.body.specialist_name}, {$push:{available_slot:req.body.available_slot}}, {new:true}).exec();
//             if(details){
//                 return res.json({status : false, message : "Specialist slot added", details })
//             }     
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



// async function addSpecialist(req,res,next){
//     try {
//             let file = req.file.filename;
//             console.log("proceed", file)
//             console.log(req.body)
//             let data = await specialistSchema.findOne({specialist_name : req.body.specialist_name}).exec();
//         if(data){
//             console.log("name" , data)
//             // return res.json({status : false, message : "Specialist name already exists", data })
//             let day = await specialistSchema.findOne({available_day : req.body.available_day}).exec();
//             console.log("day", day)
//             if(day) {
//                 let details = await specialistSchema.findOneAndUpdate({specialist_name : req.body.specialist_name}, {$push:{available_slot:req.body.available_slot}}, {new:true}).exec();
//             if(details){
//                 return res.json({status : false, message : "Specialist slot added", details })
//             } 
//             } else {

//                 console.log("update the date and slot")
//                 // let data = {
//                 //     available_day : req.body.available_day,
//                 //     available_slot : req.body.available_slot
//                 // }
//                 // let updateDay = await specialistSchema.findOneAndUpdate({specialist_name : req.body.specialist_name},data, {new : true});
//                 // console.log(updateDay)
//             }
                
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

    let department = await specialistSchema.find({department_id : req.body.department_id})
    if(department.length>0){
        let name = await specialistSchema.find({specialist_name : req.body.specialist_name});
        if(name.length>0){
            let day = await specialistSchema.findOne({available_day : req.body.available_day, specialist_name : req.body.specialist_name} );
            console.log("day", day)
            if(day){
                let details = await specialistSchema.findOneAndUpdate({available_day : req.body.available_day, specialist_name : req.body.specialist_name}, {$push:{available_slot:req.body.available_slot}}, {new:true}).exec();
                if(details){
                    return res.json({status : false, message : "Specialist slot added", details })
                } 
            } else {
                console.log("add day and slot")
                let details = new specialistSchema(req.body);
                details.image = req.file.filename
                let result = await details.save();
                return res.json({status : true, message : "Specialist name added successfully", data :result })
            }
        } else {
            console.log("specialist not found")
            let details = new specialistSchema(req.body);
            details.image = req.file.filename
            let result = await details.save();
            return res.json({status : true, message : "Specialist name added successfully", data :result })
        }
    } else {
        console.log("department not found")
            let details = new specialistSchema(req.body);
            details.image = req.file.filename
            let result = await details.save();
            return res.json({status : true, message : "Specialist name added successfully", data :result })
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


async function updateDoctorWithImg(req,res){
    try {

        let id = req.body.specialist_id
        let file = req.file.filename

        let data = {
            department_id:req.body.department_id,
            specialist_name:req.body.specialist_name,
            available_date:req.body.available_date,
            available_slot:req.body.available_slot,
            department_image:file
        }

       let result = await specialistSchema.findOneAndUpdate({specialist_id:id}, data, {new:true})
       if(result){
        console.log(result)
        return res.json({status:'success', message:'updated', result:result})
        
       }else{
        return res.json({status:'failed', message:"message"})
       }   
    } catch (error) {
        return res.json({status : false,  message:error.message })
    }
}



async function updateDoctorWithoutImg(req,res){
    try {

        let id = req.query.specialist_id

       let data =  await specialistSchema.findOneAndUpdate({specialist_id:id}, req.body, {new:true})
        if(data){
            console.log(data)
            return res.json({status:'success', message:'updated', result:data})
            
        }else{
            return res.json({status:'failed', message:"message"})
        }
    
    } catch (error) {
        return res.json({status : false,  message:error.message })
    }
}


export default {
    addSpecialist,
    getAllSpecialist,
    getSingleSpecialist,
    updateDoctorWithImg,
    updateDoctorWithoutImg,
}