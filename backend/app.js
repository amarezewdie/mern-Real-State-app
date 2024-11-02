const express=require('express');
const connectDb = require('./config');
require('dotenv').config();
const authRoute=require('./routes/authRoute')
const app=express();

const port =process.env.PORT||8000

//builtin middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//route middleware
app.use('/api/auth',authRoute);



app.listen(port,(req,res)=>{
     connectDb();
   console.log(`server running on  ${port}`);
})