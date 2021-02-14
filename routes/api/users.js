const express = require("express");
const router = express.Router();
// const db = require('../../config/database');
const  db  = require('../../db/models/index');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const Op = Sequelize.Op;
dotenv.config();

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Spotify Strategy
// passport.authenticate("spotify"),

router.get("/all/feed", (req,res) => {
    db.User.findAll({ 
        include: [{
            //follower is all other users our user is following
                model: db.Follow, as: "follower",
                separate: true,
            include: [{ 
                model: db.User, as: "being_followed",
                    include: [{
                      model: db.Post,
                      order: [['createdAt', 'DESC']],
                      separate: true,
                    },
                    {
                      model: db.Postcomment,
                      order: [['createdAt', 'DESC']],
                      separate: true,
                    },
                    {
                      model: db.Postlike,
                      order: [['createdAt', 'DESC']],
                      separate: true,
                    },
                    {
                      model: db.Commentlike,
                      order: [['createdAt', 'DESC']],
                      separate: true,
                    }
                  ]
                  }]
                }]
      }).then((users) => {
        console.log("alert these are the users ");
        console.log(users);
        res.json(users)
      }).catch((err) => {
        console.log("this is the error ", err);
        res.status(404).json(err)
     });  
});



module.exports = router;
