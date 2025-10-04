
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


//update post
//exports.updatePost
  const updatedPost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) return 
        res.status(404).json({message:"Post not found"});

        if(post.user.toString() !== req.user.id)
            returnres.status(403).json({message: "Not authorised to update this post"});

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        res.status(200).json(updatedPosts);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
};


//DELETE POST
exports.deletePost = async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) return 
        res.status(404).json({message: "Post not found"});

        if(post.user.toString() !==req.user.id)
            return
        res.status(403).json({message: "Not authorized to delete this post"});

        await post.deleteOne();
        res.status(200).json({message: "Post deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
};






















module.exports = {
    createPost,
    getAllPosts,
    updatePost,
    deletePost
}