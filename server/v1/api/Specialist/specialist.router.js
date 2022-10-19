import express from 'express';
import Controller from './specialist.controller.js'

const router = express.Router();

router.post('/addSpecialist', Controller.addSpecialist)

export default router