import express from 'express'
const app = express()

import User from './User/user.router.js';
import Admin from './Admin/admin.router.js';
import Departments from './Departments/departments.router.js';
import Specialist from './Specialist/specialist.router.js';
import Appointment from './Appointment/appointment.router.js';

app.use('/user', User)
app.use('/admin', Admin)
app.use('/departements', Departments)
app.use('/specialist', Specialist)
app.use('/book', Appointment)

export default app;