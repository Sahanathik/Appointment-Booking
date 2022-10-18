import express from 'express';
import Controller from './user.controller.js'

const app = express()

let router = express.Router()

console.log("router")

router.post('/register', Controller.register)

// router.get('/register',  function(req, res){
//     // register
// })

export default router