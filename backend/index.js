const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");

// const UserModel

const app = express();
app.use(cors());
app.use(express.json());

// const jwt = require("jsonwebtoken")
// const multer = require("multer");
// const path = require("path");

app.get("/",(req, res)=>{
    res.send("Hello World");
})


app.listen(3001, ()=>{
    console.log('Server is running on port 3001');
})
