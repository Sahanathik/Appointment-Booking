import userSchema from './user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


async function register(req,res,next){
try {
  let number = req.mobile_number;
        
  let numberDetails = await userSchema.findOne({mobile_number:number}).exec();
  if(numberDetails){
      return res.json({status:'failed', message:'mobile number already exists'})
  }

  let userdata = new userSchema(req)
  let data = await userdata.save()
  return res.status(200).json({status:'success', message:'register successed', result:data});
  
} catch (error) {
  return res.json({status:'error found', message:error.message})
}
 
}

async function login(req,res,next){
  try {
    const patientId = req.patient_id
    let user = await userSchema.findOne({patient_id:patientId})

    if(!user){
        return res.json({status:"failed", message:'user not found'})
    }else{
      const token = jwt.sign({user},"key");
      console.log('token',token);
      res.status(200).json({status:"success", message:'login success!',"token":token});
    }
} catch (error) {
    return res.status(400).json({status:'failed', message:error.message})
}
}

async function userlogin(req,res,next){
  try {
    function generateOTP() {
      var digits = '0123456789';
      let OTP = '';
      for (let i = 0; i < 4; i++ ) {
          OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
  }
    const number = req.mobile_number
    let user = await userSchema.findOne({mobile_number:number})

    if(!user){
        return res.json({status:"failed", message:'user not found'})
    }else{
      const token = jwt.sign({user},"key");
      console.log('token',token);
      res.status(200).json({status:"success", message:'login success!',"token":token});
    }
} catch (error) {
    return res.status(400).json({status:'failed', message:error.message})
}
}


export default {
    register,
    login,
    userlogin,
}