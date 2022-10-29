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

        let id = req.body.department_id
        let file = req.file.filename

        let data = {
             department_name:req.body.department_name,
             password:req.body.password,
             department_image:file
        }

        let result = await departmentSchema.findOneAndUpdate({department_id:id}, data, {new:true})
        if(result){
         console.log(data)
         return res.json({status:'success', message:'updated', result:data})
         
        }else{
         return res.json({status:'failed', message:"message"})
        }
        
    } catch (error) {
        return res.json({status : false,  message:error.message })
    }
}



async function updateDepartmentWithoutImg(req,res){
    try {

        let id = req.body.department_id
        let data = {
            deptartment_name:req.body.department_name,
            password : req.body.password
        }

        console.log(req.body.data)
       let detail =  await departmentSchema.findOneAndUpdate({department_id:id}, req.body.data, {new:true})
        if(detail){
            
            return res.json({status:'success', message:'updated', result:detail})
            
        }else{
            return res.json({status:'failed', message:"message"})
        }
    
    } catch (error) {
        return res.json({status : false,  message:error.message })
    }
}


async function getSingleDepartment(req,res){
    try {
        console.log(req)
        let data = await departmentSchema.findOne({department_id:req.department_id}).exec();
        if(data){
            return res.json({status : true,  message:"Single department detail fetched", data })
        }
    } catch (error) {
        return res.json({status : false,  message:error.message })
    }
}


export default {
    addDepartments,
    getAllDepartments,
    getSingleDepartment,
    updateDepartmentWithImg,
    updateDepartmentWithoutImg,

}