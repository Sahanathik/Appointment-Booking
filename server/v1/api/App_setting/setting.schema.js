import mongoose from 'mongoose';

const setting = new mongoose.Schema({
    title:{type:String, require:true},
    logo:{type:String, require:true}
},{
    timestamps:true
})

export default mongoose.model('setting', setting)

