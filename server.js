const express=require('express')
const dotenv=require('dotenv')
const Route=require('./routes/route')
const connectDB=require('./config/db')

const cors = require('cors');
dotenv.config()
connectDB()
const app=express();
app.use(cors())
app.use(express.json())

Port=8080;


app.use('/api/task',Route);


app.get('/',(req,res)=>{
    res.send('api is running good')
})

// Connection with server

app.listen(Port,()=>{console.log(`connected port:${Port}`)})