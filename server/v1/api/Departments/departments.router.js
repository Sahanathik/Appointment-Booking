import express from 'express';
import Controller from './departments.controller.js'

const router = express.Router()

router.post('/addDepartments', Controller.addDepartments);
router.get('/getAllDepartments', Controller.getAllDepartments)

export default router