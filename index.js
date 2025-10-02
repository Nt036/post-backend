const express = require("express")
const connectDB = require( "./db" )
require('dotenv').config();


const userRoutees = require("./routes/users");
const postRoutes = require
const app = express();

app.get('/' , (req, res) => {
    res.send('Welcome to my post api')
})

const PORT  = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
app.use('/posts', postRoutes);
connectDB();
//name your project
 //go to mongodb  create a new project the create cluster click free then click create a deployment 
 

 //mongodb+srv://trinah:KrPSTf4y6eB2DBoy@cluster0.lgnlw0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
 
 
 
 //KrPSTf4y6eB2DBoy

 //mongodb+srv://trinah:@cluster0.lgnlw0v.mongodb.net/



 //trinitynkasiima_db_user


 //D5VMqymZ63Deo77Q

 //mongodb+srv://trinitynkasiima_db_user:D5VMqymZ63Deo77Q@cluster0.w5j5e0u.mongodb.net/