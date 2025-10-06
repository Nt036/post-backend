const express = require("express")
const connectDB = require( "./db" );

const cors = require('cors')
require('dotenv').config();
const userRoutes = require("./routes/user");
const postsRoutes = require("./routes/posts")

const app = express();

app.use(express.json());
//middleware to handle CORS
const corsOptions = {
    origin: 'http://127.0.0.1:53179/index.html',
    methods: ['GET' , 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));

app.get('/' , (req, res) => {
    res.send('Welcome to my post-api')
})

//routes
app.use('/user', userRoutes);
app.use('/posts', postsRoutes);


const PORT  = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


connectDB();
//name your project
 //go to mongodb  create a new project the create cluster click free then click create a deployment 
 

 //mongodb+srv://trinah:KrPSTf4y6eB2DBoy@cluster0.lgnlw0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
 
 
 
 //KrPSTf4y6eB2DBoy

 //mongodb+srv://trinah:@cluster0.lgnlw0v.mongodb.net/



 //trinitynkasiima_db_user


 //D5VMqymZ63Deo77Q

 //mongodb+srv://trinitynkasiima_db_user:D5VMqymZ63Deo77Q@cluster0.w5j5e0u.mongodb.net/