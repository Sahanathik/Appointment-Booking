import departmentSchema from './department.model.js'

async function addDepartments(req,res){
    try {
        let name = req.body.department_name;

        let file = req.file

        console.log(file)

        let data = await departmentSchema.findOne({ department_name : name }).exec()
        if(data){
            return res.json({status:false, message:"department already exists", data})
        } else {
            let details = new departmentSchema(req.body)
            details.department_image = req.file.filename
            let result =  details.save();
            return res.json({status:true, message:"department added successfully"})
        }
    } catch (error) {
        return res.json({status:false, error})
    }
}

async function getAllDepartments(req,res){
    try {
        let data = await departmentSchema.find().exec();
        if(data){
            return res.json({status : true, message : "Departments details fetched", data })
        }
    } catch (error) {
        return res.json({status : false,  error })
    }
}

async function updateDepartmentWithImg(req,res){
    try {
        
    } catch (error) {
        
    }
}


export default {
    addDepartments,
    getAllDepartments,
    updateDepartmentWithImg,
    // updateDepartment,

}