const mongoose = require("mongoose");
const validator = require("validator");


// create a schema in DB
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        
    },
    email :{
        type : String,
        required : true,
        unique: [true,"email id already exist"],
        validate: (value)=>{
          if(!validator.isEmail(value)){
            throw new Error("Invalid Email");
          }
        }
        
    },
    phone : {
        type : Number,
        unique: [true,"Phone Number already exist"],
        required : true
    },
    address : {
        type: String,
        required:true
    },
    description : {
        type : String
    }
});

// create a collection 

const User = new mongoose.model("/User",userSchema);
module.exports = User;