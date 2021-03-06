////////////////////////
// Setup - Import deps and create app object
////////////////////////
require("dotenv").config();

const morgan = require("morgan");
const express = require("express");
const app = express();
const PORT = process.env.PORT;

//////////////////////
// Database
//////////////////////
const drinks = require("./models/drinks");
const food = require("./models/food");
capitalize(drinks);
/////////////////////
// Declare Middleware
//////////////////////
app.use("/static",express.static("public"));
app.use(morgan("tiny"));

///////////////////////
// Declare Routes and Routers 
///////////////////////

//root
app.get("/", (req, res) =>{
    res.send("Welcome to the Gitpub App!");
});


//index
app.get("/menu", (req, res) =>{
    res.render("menu_index.ejs",{drinks: drinks, food: food});
});

//show
app.get("/menu/drinks/:id", (req, res) =>{
    res.render("drinks_show.ejs", {drink:drinks[req.params.id]})
})

app.get("/menu/food/:id", (req, res) =>{
    res.render("food_show.ejs", {foodItem: food[req.params.id]})
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