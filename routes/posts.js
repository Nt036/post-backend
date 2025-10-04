/**const express = require("express")

const { createPost, getAllPosts, updatePost, deletePost} = require("../controllers/posts")

//const {} = require("../controllers/posts");

const {protect} = require("../middlewares/auth")

//const auth = require("../middlewares/auth")

const router =  express.Router()

router.post('/', auth, createPost)

router.get('/', getAllPosts)

//route to update a post
router.put("/:id", protect,deletePost );

//Route to delete a post
router.delete("/:id", protect, deletePost);




module.exports = router;
**/


const express = require("express");
const { createPost, getAllPosts, updatePost, deletePost } = require("../controllers/posts");
const { protect } = require("../middlewares/auth"); // Destructure only the protect middleware

const router = express.Router();

// Route to create a new post with authentication middleware
router.post('/', protect, createPost);

// Route to get all posts (no authentication needed)
router.get('/', getAllPosts);

// Route to update a post, requires authentication
// Route to update a post, requires authentication
router.put("/:id", protect, updatePost);

// Route to delete a post, requires authentication
router.delete("/:id", protect, deletePost);

module.exports = router;