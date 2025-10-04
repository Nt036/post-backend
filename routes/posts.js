const express = require("express")

const { createPost, getAllPosts} = require("../controllers/posts")

const auth = require("../middlewares/auth")

const router =  express.Router()

router.post('/', auth, createPost)
router.get('/', getAllPosts)

module.exports = router;