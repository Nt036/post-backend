
const Post = require("../models/post")

const createPost = async (req, res) => {
    const post = req.body

    const newPost = new Post({...post, creator: req.userId, createdAt: new Date().toISOString()})


    try {
        await newPost.save();

        res.status(201).json({newPost})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({posts});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//Update Post
const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) return 
        res.status(404).json({message: 'Post not found'});

        //check if user owns the post
        if(post.user.toString() !== req.user.id)
            return
        res.status(403).json({message: 'Unauthorized'});

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});

        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}


//Delete Post
const deletePost = async(req, res) =>{
    try {
        const post = await Post.findById(req.params.id);

        if (!post) return
        res.status(404).json({message: 'Post not found'});

        if (post.user.toString() !== req.user.id)
            return
        res.status(403).json({message: 'Unauthorised'});

        await Post.findByIdAndDelete(req.params.id);
        res.json({message: 'Post deleted successfully'});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}




module.exports = {
    createPost,
    getAllPosts,
    updatePost,
    deletePost
}