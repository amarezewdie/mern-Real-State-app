const express=require('express');
const connectDb = require('./config');
require('dotenv').config();

const app=express();

const port =process.env.PORT||8000

 connectDb()
app.listen(port,(req,res)=>{
   console.log(`server running on  ${port}`);
})