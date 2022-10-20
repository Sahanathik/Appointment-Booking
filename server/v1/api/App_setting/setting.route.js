const router = require('express').Router()
import settingSchema from './setting.schema'

import multer from 'multer';


router.post('/setting', async(req, res)=>{
    try {
        let appSetting = new settingSchema(req.body)
        let data = appSetting.save();

        return res.json({status:'success', message:'added', result:data})
    } catch (error) {
        return res.status(404).json({'status':'failed', 'error':error.message}) 
    }
})


// router.put('/edit', async(req, res)=>{
//     try {
//         let data = await settingSchema.update()
//     } catch (error) {
//         return res.status(404).json({'status':'failed', 'error':error.message}) 
//     }
// })

router.delete('/remove', async(req, res)=>{
    try {
        let data = await settingSchema.findOneAndDelete().then(data=>{
            return res.json({status:'success', message:'deleted'})
        })
    } catch (error) {
        return res.status(404).json({'status':'failed', 'error':error.message}) 
    }
})


// multer

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '')
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + '_' + file.originalname)
    }
})



router.post('/upload', async (req, res)=>{
    try {
    const upload = await multer({storage: storage}).single('file')
    upload(req, res, (err)=>{
      if(!req.file){
        return res.status(400).json({'alert':'upload a file'})
      }else if(err instanceof multer.MulterError){
        return res.status(404).json({'err': err})
      }else if(err){
        return res.status(404).json({'error': err})
      }else{
        return res.status(200).json({'status':"success", 'message':'uploaded'})
      }
    })
    } catch (error) {
    return res.status(404).json({'status':'failed', 'error':error.message})       
    }
})

module.exports = router;