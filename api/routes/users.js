const router = require("express").Router();

const User = require("../models/user")
const Post = require("../models/post")
const bcrypt = require("bcrypt");


//Update User

router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {                              //if the id saved in database is similar to the id in that we are passing while sending the request then we will check try and catch block

        if (req.body.password) {                                           //if there is a password then hash it
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { //update the user find by id and update it
                $set: req.body, //setting the body of the (updating the body)
            }, { new: true });       // adding new user in the DB user
            req.status(200).json(updatedUser); //sending updated user if everything is ok
        }
        catch (err) {
            res.status(500).json(err)                      // handling err 
        }
    }
    else {
        res.status(401).json("You can update your account only !")
    }
})

//Delete user
//38: To delete the posts of the user we need to find USER --> POSTS ---> delete the user and post of that user 
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {                              //if the id saved in database is similar to the id in that we are passing while sending the request then we will check try and catch block
        try {
            const user = await User.findById(req.params.id); //findin user to delete users post
            try {
                await Post.deleteMany({username: user.username}); //there can be many posts   --> delete them BY FINDING BY USERNAME 
                await User.findByIdAndDelete(req.params.id); //deleting the user by finding it's ID
                res.status(200).json("User has been deleted...");  //but still we can see the posts of this user hence we need to delete users post also 
            }
            catch (err) {
                res.status(500).json(err)                      // handling err 
            }
        }
        catch (err) {
            res.status(404).json("user not found !"); //if user couldn't found
        }
    }
    else {
        res.status(401).json("You can delete your account only !")
    }
});

//GET User

router.get("/:id", async(req,res) => {
    try{
        const user = await User.findById(req.params.id);      //user by userID
        // const username = await User.findOne(req.body.username);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router; 