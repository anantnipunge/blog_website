const router = require("express").Router();

const User = require("../models/user")

const bcrypt = require("bcrypt");




//Register

router.post("/register", async (req,res) =>{ 
    try{

        const salt = await bcrypt.genSalt(10);  //A salt is a random string that makes the hash unpredictable
        const hashedPass = await bcrypt.hashSync(req.body.password, salt); //generating hashed password

        const newUser = new User({                //creating a new user 
            username: req.body.username, 
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();         // function has to wait till the user create ans get saved into database
        res.status(200).json(user);                // data will be saved for the user by sending request as user
    }
    catch(err) {
     res.status(500).json(err)                      // handling err 
     return;
    }
})

//login

router.post("/login", async (req,res) =>{
     try{
        const user = await User.findOne({username: req.body.username}); // finding unique user from the database
        !user && res.status(400).json("wrong credentials !");  //if it's not user then just send status 400
        

        const validate = await bcrypt.compare(req.body.password, user.password); // comapring the user's password which is present in the database as--> ({user: "password"})
        !validate && res.status(400).json("wrong credentials !");//if password is wrong then don't validate user
        

        const {password, ...others} = user._doc;
        res.status(200).json(others); // if everything is correct we can send this user to database
     }  
     catch(err) {
        res.status(500).json(err); //catching error
     }
});
 
module.exports = router; 