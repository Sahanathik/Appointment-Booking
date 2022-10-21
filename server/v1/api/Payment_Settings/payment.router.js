import express from 'express';
import Controller from './payment.controller.js'

const router = express.Router();

router.post('/addPaymentDetails', Controller.addPaymentDetails)

export default router;