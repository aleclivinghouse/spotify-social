const express = require("express");
const bodyParser = require("body-parser");
const passport = require("./config/passport");
const path = require('path');
const dotenv = require('dotenv');
const users = require("./routes/api/users");
const  db  = require('./db/models/index');
const Sequelize = require('sequelize');
const util = require('util')
// const db = require('./config/database');
dotenv.config();

const app = express();

const resolveCrossDomain = function(req, res,next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Expose-Headers", "Authorization");

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

// Body Parser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//get all of a users friends
const Op = Sequelize.Op;

db.User.findAll().then((users) => {
  console.log("alert these are the users ");
  console.log(users);
});

db.Artist.findAll().then((users) => {
  console.log("alert these are the artists ");
  console.log(users);
});

db.Album.findAll().then((users) => {
  console.log("alert these are the albums ");
  console.log(users);
});

app.use(resolveCrossDomain);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
