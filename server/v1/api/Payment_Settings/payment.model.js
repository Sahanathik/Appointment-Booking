import mongoose from 'mongoose';
import crypto from 'crypto';


const paymentSettingsSchema = new mongoose.Schema({
    id:{type:String, require:true, unique:true},
    key:{type:String, require:true},
},
{
    timestamps:true
});

paymentSettingsSchema.pre('save', function(next){
    this.id="PAYSET-"+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
    next()
})

export default mongoose.model('paymentSettingsSchema', paymentSettingsSchema)