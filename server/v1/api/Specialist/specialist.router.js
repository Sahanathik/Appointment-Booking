import express from 'express';
import Controller from './specialist.controller.js'

const router = express.Router();

router.post('/addSpecialist', Controller.addSpecialist)
router.get('/getAllSpecialist', Controller.getAllSpecialist)
router.get('/getSingleSpecialist', Controller.getSingleSpecialist)
router.put('/updateImage', Controller.updateDoctorWithImg)
router.put('/updateSpecialist', Controller.updateDoctorWithoutImg)



export default router