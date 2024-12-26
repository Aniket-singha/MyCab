const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const app=express()
const connect=require('./db')
const userRoutes = require('./routes/user.routes')
const cors=require('cors')


connect();
app.use(cors())
app.use(express.json())

app.use('/users',userRoutes)

module.exports=app