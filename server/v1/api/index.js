import express from 'express'
const app = express()

import User from './User/user.router.js';
import Admin from './Admin/admin.router.js';

app.use('/user', User)
app.use('/admin', Admin)

export default app;