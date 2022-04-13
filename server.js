////////////////////////
// Setup - Import deps and create app object
////////////////////////
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
//////////////////////
// Database
//////////////////////

//////////////////////
// Declare Middleware
//////////////////////


///////////////////////
// Declare Routes and Routers 
///////////////////////
app.get("/", (req, res) =>{
    res.send("Welcome to the Gitpub App!")
});
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, ()=>{
    console.log("drinking at port", PORT);
});