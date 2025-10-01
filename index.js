const express = require("express")
require('dotenv').config();


const userRoutees = require("./routes/users");

const app = express();

app.get('/' , (req, res) => {
    res.send('Welcome to my post api')
})

const PORT  = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

connectDB();
//name your project
 //go to mongodb  create a new project the create cluster click free then click create a deployment 