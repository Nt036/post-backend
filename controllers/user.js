const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


const User = require("../models/user");


const register = async (req, res) => {
    const {email,comfirmpassword, firstName, lastName} = req.body
    try {
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(404).json({message: "User already exists"})
        if (password !== confirmPassword) return res.status(404).json({message: "Password missing"})

        const hashedPassword = await bcrypt.hash(password,12);
        
        await User.create({email, password:hashedPassword, name: `${firstName} ${lastName}`})
        
        const token =jwt.sign({email: result.email, id: result._id},{expiresIn: "1h"});
    
        res.status(200).json({message: "User created!" , result, token})


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = register