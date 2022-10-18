import mongoose from 'mongoose';
import crypto from 'crypto';


const userSchema = new mongoose.Schema({
    admin_id:{type:String, require:true, unique:true},
    email_id:{type:String, require:true},
    password:{type:String, require:true},
},
{
    timestamps:true
});

userSchema.pre('save', function(next){
    this.admin_id="USR-"+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
    next()
})

export default mongoose.model('admin', adminSchema)