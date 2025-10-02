const express = require("express")

const { CREATEpOST} = require("../controllers/posts")

const auth = require("../middlewares/auth")

const router =  express.Router()

router.get('/', get)

router.post('/', )