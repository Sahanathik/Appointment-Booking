import express from 'express';
import Controller from './Specialist_day_slot.controller.js';

const router = express.Router();

router.post('/addDaySlot', Controller.addDaySlot)

export default router