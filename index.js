//Package import
const express = require("express");
const app = express();
const mongoose = require('mongoose');

//file import
 const Config = require('./Config/config.js');
const PORT = 8000;
const DB = CONFIG.db_uri
// connections
mongoose.connect(DB);

app.listen(PORT,()=>{
    console.log("Connect backend");
    
});