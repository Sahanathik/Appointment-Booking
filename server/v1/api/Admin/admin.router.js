import express from 'express';
import Controller from './admin.controller.js'

const app = express()

let router = express.Router()

console.log("router")

router.post('/Login', Controller.Login)


// router.get('/register',  function(req, res){
//     // register
// })

export default router