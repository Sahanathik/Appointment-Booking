import express from 'express';
import Controller from './specialist.controller.js'

const router = express.Router();

router.post('/addSpecialist', Controller.addSpecialist)
router.get('/getAllSpecialist', Controller.getAllSpecialist)
router.get('/getSingleSpecialist', Controller.getSingleSpecialist)



export default router