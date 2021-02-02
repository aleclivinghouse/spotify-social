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
     db.Album.findAll().then((albums) => {
        console.log("these are the albums");
        if(!albums){
            console.log("no albums were returned");
        } else {
            res.json(albums);
        }
     }).catch((err) => {
        res.status(404).json(err)
     });
});


router.get("/artists/all", (req,res) => {
    db.Album.findAll({
    include:[{
        model: db.Artists
    }]
    }).then((albums) => {
       console.log("these are the albums artist");
       if(!albums){
           console.log("here is the join ");
       } else {
           res.json(albums);
       }
    }).catch((err) => {
       res.status(404).json(err)
    });
});


module.exports = router;
