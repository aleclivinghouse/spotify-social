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

router.get("/all", async (req,res) => {
    try{
        const PostsQuery = await db.Post.findAll({
         include:[{
             model: db.User,
             attributes: ['id', 'display_name', 'followers_count']
            }]
        });
        const FavoriteTracksPostsQuery = await db.FavoriteTracksByAnArtistPost.findAll({
            include:[{
                model: db.User,
                attributes: ['id', 'display_name', 'followers_count']
            }]
        });
        const array = [...PostsQuery, ...FavoriteTracksPostsQuery];
        res.json(array);
    } catch(error){
        console.log("there was an error ", error);
        res.status(404).json(err)
    }
});



module.exports = router;
