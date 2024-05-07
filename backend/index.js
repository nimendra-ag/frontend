const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");

// const UserModel

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
// const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");


//API Creation    
app.get("/",(req, res)=>{
    res.send("Hello World");
})

//Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage});


//Creating upload endpoint for images
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res)=>{
    res.json({
        success: 1,
        image_url: `http://localhost:3001/images/${req.file.filename}`})
})

app.listen(3001, ()=>{
    console.log('Server is running on port 3001');
})
