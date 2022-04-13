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
const drinks = require("./models/drinks");
capitalize(drinks);
/////////////////////
// Declare Middleware
//////////////////////
app.use("/static",express.static("public"));

///////////////////////
// Declare Routes and Routers 
///////////////////////

//root
app.get("/", (req, res) =>{
    res.send("Welcome to the Gitpub App!")
});


//index
app.get("/drinks", (req, res) =>{
    res.render("drinks_index.ejs",{drinks: drinks});
});

app.get("/drinks/:id", (req, res) =>{
    res.send(req.params.id)
})


///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, ()=>{
    console.log("drinking at port", PORT);
});

///////////////////////////
// Functions
///////////////////////////
function capitalize(words){
    let letters;
    let capital;
    for(let i = 0; i < words.length; i++){
        capital = words[i].name[0].toUpperCase()
        letters = words[i].name.split("")
        letters.splice(0,1,capital)
        words[i].name = letters.join("")
        letters = null
        // console.log(words[i].name)
    }
}