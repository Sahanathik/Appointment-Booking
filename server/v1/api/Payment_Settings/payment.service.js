import paymentSettingsSchema from './payment.model.js';

async function addPaymentDetails(req,res,next){
    try {
        let data = new paymentSettingsSchema(req);
        let result = await data.save();
        return res.json({status:true, message:"payment details are added"})
    } catch (error) {
        
    }

}

export default {
    addPaymentDetails
}