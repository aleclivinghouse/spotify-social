const express = require("express");
const bodyParser = require("body-parser");
const passport = require("./config/passport");
const path = require('path');
const dotenv = require('dotenv');
const auth = require("./routes/api/auth");
const users = require("./routes/api/users");
const tracks = require("./routes/api/tracks");
const albums = require("./routes/api/albums");
const posts = require("./routes/api/posts");
const Sequelize = require('sequelize');
const  db  = require('./db/models/index');
const util = require('util');
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

app.use(resolveCrossDomain);
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/tracks", tracks);
app.use("/api/albums", albums);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
