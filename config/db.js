const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://dev3helpoperation:adADF123FAj@cluster0.jqsfv.mongodb.net/Furniro?retryWrites=true&w=majority&appName=Cluster0")
        console.log("mongodb connected");
    }catch(err){
        console.error("error", err);
        process.exit(1);
    }
}

module.exports = connectDB;