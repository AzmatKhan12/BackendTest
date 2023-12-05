require("dotenv").config();
const mongoose = require("mongoose");

// const DB = process.env.DATABASE;
// const DB =
// console.log(DB)"mongodb+srv://GW_khan:khan123@cluster0.gbxmadv.mongodb.net/AFFA?retryWrites=true&w=majority"

// mongoose.connect("mongodb://127.0.0.1:27017/AFFA",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,

// }).then(()=>{
//     console.log("connection successful with DB");
// }).catch((e)=>{
//     console.log(e, "connection failed with DB")
// })


mongoose.connect( process.env.MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useMongoClient:true 
}).then(()=>{
    console.log("connection successful with DB");
}).catch((e)=>{
    console.log(e, "connection failed with DB")
});
