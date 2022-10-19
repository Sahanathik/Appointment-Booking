import mongoose from 'mongoose';
import crypto from 'crypto';


const adminSchema = new mongoose.Schema({
    admin_id:{type:String, require:true, unique:true},
    email_id:{type:String, require:true},
    password:{type:String, require:true},
    role:{type:String, require:true},
},
{
    timestamps:true
});

adminSchema.pre('save', function(next){
    this.admin_id="Admin-"+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
    next()
})

export default mongoose.model('admin', adminSchema)