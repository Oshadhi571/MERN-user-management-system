//OtcDSrBAaLB79a3Y
//arundathioshadhi2001_db_user
const express = require("express");
const mongoose = require("mongoose");
const router= require("./Route/UserRoute")

const app= express();
const cors=require("cors");

//middleware
app.use(express.json()); 
app.use(cors());
app.use("/users",router);



mongoose.connect("mongodb+srv://arundathioshadhi2001_db_user:OtcDSrBAaLB79a3Y@cluster0.0zgizc4.mongodb.net/user?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000);
})

.catch((err)=> console.log((err)));

//call Register Model

require("./Model/Register");
const User =mongoose.model("Register");
app.post("/register",async(req,res)=>{
    const{name,gmail,password}=req.body;
    try{
        await User.create({
            name,
            gmail,
            password,
        })
        res.send({status:"ok"});
    }catch(err){
        res.send({status:"err"});

    }
});