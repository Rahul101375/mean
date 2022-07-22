const employeeData=require('../models/employee');
const aysncHandler=require('express-async-handler');
const mongoose=require('mongoose')

exports.create=aysncHandler(async(req,res)=>{
    console.log(req.body)
    const newRecord=new employeeData({
        name:req.body.name,
        department:req.body.department,
        salary:req.body.salary,
    })
    const data=await employeeData.create(newRecord)
    res.status(201).json({success:true,data:data,message:'Data Store'})
});



exports.update=aysncHandler(async(req,res)=>{
    const {name,department,salary}=req.body;
    const taskExist=await employeeData.findOneAndUpdate({id:req.params.id},{name:name,department:department,salary:salary})
    if(taskExist){
        res.status(201).json({success:true,data:taskExist,message:'task is Updated'})
    }
    else{
        res.status(401).json({success:false,data:null,message:'task is not updated'})
    }
})

exports.deleted=aysncHandler(async(req,res)=>{
    const isTaskExist=await employeeData.deleteOne({_id:new mongoose.Types.ObjectId(req.params.id)})
    if(isTaskExist.acknowledged){
        res.status(200).json({
            success:true,
            message:"Task is deleted successfully"
        })
    }
})

exports.getById=aysncHandler(async(req,res)=>{
    const isExistTask=await employeeData.findOne({id:req.params.id})
    if(isExistTask){
        res.status(200).json({
            success:true,
            data:isExistTask,
            message:'Task is Found'
        })
    }
    else{
        res.status(404).json({
            success:false,
            data:null,
            message:'Task is Not Found'
        })
    }
})

exports.getAll=aysncHandler(async(req,res)=>{
    const isExistTask=await employeeData.find({})
    if(isExistTask){
        res.status(200).json({
            success:true,
            data:isExistTask,
            message:'Task is Found'
        })
    }
    else{
        res.status(404).json({
            success:false,
            data:null,
            message:'Task is Not Found'
        })
    }
})