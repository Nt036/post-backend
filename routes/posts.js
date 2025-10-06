const express = require("express")

const { createPost, getAllPosts, updatePost, deletePost} = require("../controllers/posts")

//const {} = require("../controllers/posts");

//const {protect} = require("../middlewares/auth")

const auth = require("../middlewares/auth")

const router =  express.Router();

router.post('/', auth, createPost)

router.get('/', getAllPosts)

//route to update a post
router.put("/:id",updatePost );

//Route to delete a post
router.delete("/:id",  deletePost);




module.exports = router;



