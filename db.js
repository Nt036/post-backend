const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Your connection to mongodb is successful")
    } catch (error) {
        console.log(error)
    }
}