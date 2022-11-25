const express = require('express')
const app = express()
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoriesRoute = require("./routes/categories")
const multer = require("multer");




console.log("hello")

const dotenv = require("dotenv")
const mongoose = require("mongoose")

app.use(express.json()); 
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(console.log("mongoDB connected !")).catch((err)=>console.log(err)); //mongoDB connection


//upload file handler using multer !
var storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, "files");  //store in a files folder
    },

    filename:(req,file, cb) =>{
        cb(null, Date.now() + file.originalname);    // file name 
    },
});

const upload = multer({storage:storage}); //upload function to store the images in the diskstorage


// post method to upload photo.

app.post("/api/upload", upload.single("file"), (req,res) =>{    
    res.status(200).json("file has been uploaded!");
});

// app.use("/about",(req,res)=>{   
//     console.log("this is the about URL")
// })
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);  //routing   
app.use("/api/posts", postRoute);  //routing 
app.use("/api/categories", categoriesRoute);  //routing 

app.listen("5000", ()=>{
    console.log("Backend is Running here!")
})
