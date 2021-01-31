const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require('../../config/passport')
// const db = require('../../config/database');
const  db  = require('../../db/models/index');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const Op = Sequelize.Op;
const jwt_decode = require("jwt-decode");
dotenv.config();

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Spotify Strategy
// passport.authenticate("spotify"),

router.get("/all", (req,res) => {
     db.Track.findAll().then((tracks) => {
        console.log("these are the tracks");
        if(!tracks){
            console.log("no tracks were returned");
        } else {
            res.json(tracks);
        }
     }).catch((err) => {
        res.status(404).json(err)
     });
});


module.exports = router;
