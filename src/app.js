require("dotenv").config();
const express = require("express");
const path =require("path")
const app = express();
const dotenv = require("dotenv");
 const port = process.env.PORT || 8000;
const User = require("./models/userSchema")
const userRouter = require("./router/user")
require("./db/connect");
dotenv.config({path : "./config.env"});


app.use(express.json());
app.use(userRouter);

app.get("/",(req,res)=>{
    res.send("AFFA Enterprise")
});

// listen the server
app.listen(port,()=>{
    console.log(`listening at port no ${port}`)
});
