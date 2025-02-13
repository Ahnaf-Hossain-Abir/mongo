const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://Ahnaf_Hossain_Abir:Pj6tF9UiA6lVOeox@cluster0.3tbhd.mongodb.net/")
        console.log("mongodb connected");
    }catch(err){
        console.error("error", err);
        process.exit(1);
    }
}

module.exports = connectDB;