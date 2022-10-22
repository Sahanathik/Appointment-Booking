import mongoose from "mongoose";
import crypto from "crypto";

const appointmentSchema = new mongoose.Schema({
   appointmentId:{type:String, require:true, unique:true},
   doctor_name:{type:String, require:true},
   department:{type:String, require:true}, 
   appoinment_date:{type:String, require:true},
   patient_id:{type:String, require:true},
   slot:{
    slot1 : {
        type : String
    },
    slot2 : {
        type : String
    },
    slot3 : {
        type : String
    },
    slot4 : {
        type : String
    },
},
    appointment_staus:{type:String, require:false},
   
},{
    timestamps:true
})

appointmentSchema.pre("save", function(next){
  this.appointmentId = "BookId"+crypto.pseudoRandomBytes(3).toString("hex").toUpperCase()
  next()
})

export default mongoose.model("appointment", appointmentSchema)