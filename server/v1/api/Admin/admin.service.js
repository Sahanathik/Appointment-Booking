import adminSchema from './admin.model.js';
import bcrypt from 'bcrypt';


async function Login(req,res){
    return res.send({message:Success})
}


async function Register(req,res){
    console.log('email', req)
    try {
        let email = req.email_id;
        
        let emailDetails = await adminSchema.findOne({email_id:email}).exec();
        if(emailDetails){
            return res.json({status:'failed', message:'Email already exists'})
        }
        
        let Details = new adminSchema(req)
        if(req.password){
            let password = req.password;
            const salt = await bcrypt.genSalt(10);
            Details.password = bcrypt.hashSync(password, salt)
          }

          const result = await Details.save()
          return res.status(200).json({status:'success', message:'register successed', result:result});
       
    }catch (error) {
        return res.json({status:'error found', message:error.message})
    } 
}


export default {
    Login,
    Register
}