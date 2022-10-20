import Service from './payment.service.js';

async function addPaymentDetails(req,res,next){
    await Service.addPaymentDetails(req.body,res, function(result){

        return res.json({message : result.message})

    })
}

export default {
    addPaymentDetails
}