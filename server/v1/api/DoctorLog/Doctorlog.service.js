import doctorLogSchema from "./Doctorlog.model.js";
import specialistSchema from '../Specialist/specialist.model.js';
import specialistDaySlotSchema from '../Specialist_day_slot/Specialist_day_slot.model.js';
import departmentSchema from '../Departments/department.model.js'
async function doctorLog(req,res,next){
    try {
        let data =  await departmentSchema.aggregate([{
            $lookup: {
                    from: "specialistSchema",
                    localField: "department_id",
                    foreignField: "department_id",
                    as: "doctorlog"
                }
        }])

        // let data = await specialistSchema.find().exec();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export default {
    doctorLog
}