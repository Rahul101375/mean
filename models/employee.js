const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
})

const employeeData=mongoose.model("employee",employeeSchema)
module.exports=employeeData