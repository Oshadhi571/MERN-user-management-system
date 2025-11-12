const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regiSchema = new Schema({
    name:{
        type:String,//data type
        required:true,//validate

    },
    gmail:{
        type:String,//data type
        required:true,//validate

    },
    
    password:{
        type:String,//data type
        required:true,//validate

    }
    

});
module.exports= mongoose.model(
    "Register",//filename
    regiSchema //function name
)