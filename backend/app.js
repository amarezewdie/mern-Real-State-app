const express=require('express');
const connectDb = require('./config');
require('dotenv').config();
const cors=require('cors');
const authRoute=require('./routes/authRoute');
const errorHandler = require('./middleware/errorHandler');
const app=express();

const port =process.env.PORT||8000

//builtin middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(cors())

//route middleware
app.use('/api/auth',authRoute);



app.listen(port,(req,res)=>{
     connectDb();
   console.log(`server running on  ${port}`);
})

app.use(errorHandler);
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Not Found" });
});