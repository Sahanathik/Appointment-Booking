import mongoose from 'mongoose';
import crypto from 'crypto';
import moment from 'moment';

const specialistSchema = new mongoose.Schema({
    specialist_id:{type:String, require:true, unique:true},
    department_id:{type:String, require:true},
    specialist_name:{type:String, require:true},
    available_date: {type : Date},
    available_slot:{
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
    }
},
{
    timestamps:true
});

specialistSchema.pre('save', function(next){
    this.specialist_id="SPE-"+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
    next()
})

export default mongoose.model('specialist', specialistSchema)