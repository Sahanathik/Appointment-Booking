import express from 'express';
import dotenv from 'dotenv';
import v1 from './v1/index.js'

dotenv.config()

const app = express();

app.use('/v1', v1)

let port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`App is listening on ${port}`);
})


