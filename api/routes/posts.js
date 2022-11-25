const router = require("express").Router();

const User = require("../models/user")
const Post = require("../models/post");




//create post

router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();          // await will show response in console
        res.status(200).json(savedPost);
    }
    catch (err) {
        res.status(500).json(err);                     // handling err 
    }
});

//update post 

router.put("/:id", async (req, res) => {
    //if req.body.id === params.id then try and catch --> try(we will updtate by finding post using id) --> else console msg
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true },);
                res.status(200).json(updatedPost);
            } catch (err) {
                res.send(500).json(err);
            }
        }
        else {
            res.status(401).json("You can update your post only !");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete post

router.delete("/:id", async (req, res) => {
    //if req.body.id === params.id then try and catch --> try(we will updtate by finding post using id) --> else console msg
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();    //already had a post found by id at line 48
                res.status(200).json("Your post has been deleted !");
            } catch (err) {
                res.send(500).json(err);
            }
        }
        else {
            res.status(401).json("You can delete your post only !");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get post method

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);      //post by post id and get the post
        res.status(200).json(post || "No posts available");
    } catch (err) {
        res.status(500).json(err || "No posts available !");
    }
})

//get all posts
// router.get("/?user="username", async(req,res)   query and its value
router.get("/", async (req, res) => {

    const username = req.query.user; //assuming user from user query
    const catname = req.query.cat; // assuming catname for cat query
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        }
        else if (catname) {
            posts = await Post.find({ categories: { $in: [catname] }, },)
        }
        else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router; 