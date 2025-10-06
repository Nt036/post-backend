const jwt = require("jsonwebtoken");

//const secret = process.env.JWT_SECRET;


const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorisation.split(" ")[1];

        let decodedData;

        if(token) {
            decodedData = jwt.verify(token, `test`);

            req.userId = decodedData.id;

        }
        next()

    } catch (error) {
        console.log("Authentication Error:" ,error.message);
      res.status(401).json({message: "invalid token"}) 
    }
}


module.exports = auth;