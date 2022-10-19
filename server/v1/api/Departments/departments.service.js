import departmentSchema from './department.model.js'

async function addDepartments(req,res){
    try {
        let name = req.department_name;

        let data = await departmentSchema.findOne({ department_name : name }).exec()
        if(data){
            return res.json({status:false, message:"department already exists", data})
        } else {
            let details = new departmentSchema(req)
            let result =  details.save();
            return res.json({status:true, message:"department added successfully"})
        }
    } catch (error) {
        return res.json({status:false, message:error})
    }
}

async function getAllDepartments(req,res){
    try {
        let data = await departmentSchema.find().exec();
        if(data){
            return res.json({status : true, message : "Departments details fetched", data })
        }
    } catch (error) {
        
    }
}


export default {
    addDepartments,
    getAllDepartments,

}