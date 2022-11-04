import specialistDaySlotSchema from './Specialist_day_slot.model.js'

async function addDaySlot(req,res,next){
    try {
        let day = req.body.available_day;
        let slot = req.body.available_slot
        let depId = req.body.department_id;
        let docId = req.body.specialist_id;
        
        let data = await specialistDaySlotSchema.find({specialist_id: docId, department_id: depId}).exec();
        console.log(data)
        if(data.length == 0){
            console.log("insert data")
            let insert = new specialistDaySlotSchema({
                                specialist_id : docId,
                                department_id : depId,
                                available_day : day,
                                available_slot : slot
                            })
            insert.save();
            if(insert){
                console.log(insert)
            }
        } else {
            console.log("HELLO")
                let findData = await specialistDaySlotSchema.find({specialist_id : docId, available_day : day}).exec();
                console.log("find data", findData)
                if(findData.length != 0)
                    {
                    console.log("findData", findData)
                    if(findData[0].available_day === day){
                        if(findData[0].available_slot.length >= 4){
                            return res.json({status : true, message : "Specialist slots are full" })
                        } else {
                            let details = await specialistDaySlotSchema.findOneAndUpdate({available_day : day, specialist_id : docId}, {$push:{available_slot : slot}}, {new:true}).exec();
                            if(details){
                                return res.json({status : true, message : "Specialist slot added", details })
                            }
                        }
                      
                    } else {
                        console.log("insert New")
                        let insert2 = new specialistDaySlotSchema({
                            specialist_id : docId,
                            department_id : depId,
                            available_day : day,
                            available_slot : slot
                        })
                        insert2.save();
                        if(insert2){
                            return res.json({status : true, message : "Specialist slot added", data : insert2 })
                        }
                    }
                }
             
                    console.log("insert New")
                    let insert3 = new specialistDaySlotSchema({
                        specialist_id : docId,
                        department_id : depId,
                        available_day : day,
                        available_slot : slot
                    })
                    insert3.save();
                    if(insert3){
                        return res.json({status : true, message : "Specialist slot added", data : insert3 })
                    }
        }  
          
    } catch (error) {
        console.log(error)
    }
}

export default {
    addDaySlot
}