const express = require("express")

const register = require("../controllers/user")

const router = express.Router(); //(alias) const register:

router.post('/register', register);

module.exports = router;