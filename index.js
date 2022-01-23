const kinetics = require("./model/kineticsmodel");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const { engine } = require('express-handlebars');
const bodyparser = require("body-parser");
const application  = express();
const KineticsContoller = require("./controllers/enzydb");

mongoose.connect("mongodb+srv://developer:WdK3iz7m1R8rj8Eh@cluster0.5ey45.mongodb.net/IntEnzyDB", (error) => {
    if (!error){
        console.log("Success connected");
    }
    else{
        console.log("ErrorSuccess")
    }
});
application.use(bodyparser.urlencoded({
    extended : true
}));

//application.engine('handlebars', engine());
// Configure template Engine and Main Template File
application.engine('handlebars', engine({
    defaultLayout: 'main',
    extname: '.handlebars'
}));

// Setting template Engine
application.set('view engine', 'handlebars');
application.set('views', './views');

application.get("/",(req, res)=>{
   res.render('home', {});
});

application.get("/delete",(req, res)=>{
     res.render('delete', {})
});

application.get("/search",(req, res)=>{
    res.render('search', {})
});

application.use("/public",express.static("public"));
application.use("/kinetics", KineticsContoller);

const port = process.env.PORT || '5000'
application.listen(port, ()=>{
    console.log("Server")
});