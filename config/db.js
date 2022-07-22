const mongoose=require('mongoose')

// connect Mongod DB
const connectDB=()=>{
const isConnect=mongoose.connect(process.env.DB_CONNECTION,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
})

if(isConnect){
    console.log("MongoDB connected")
    // console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)

}
else{
    console.error("Error")
    // console.error(`Error : ${error.message}`.red.underline.bold)
    process.exit(1)
}
}

// for user Login and Registation
const authDB=()=>{
    const isAuth=mongoose.connect(process.env.DB_CONNECTION,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    if(isAuth){
        console.log("MongoDB connected"); 
    }
    else{
        console.error("Error");
        process.exit(1)
    }
}

module.exports=connectDB;
module.exports=authDB
