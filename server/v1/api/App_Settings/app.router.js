import express from 'express';
import Controller from './app.controller.js';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination(req, file, callback){
        callback(null, 'v1/uploads/logo')
    },
    filename(req,file,callback){
        callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({ storage });

const router = express.Router();

router.use('/addAppSettings', upload.single('logo'),Controller.addAppSettings);

export default router