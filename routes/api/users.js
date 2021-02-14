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

router.get("/all/feed", async (req,res) => {
  try{
        const query = await db.User.findAll({ 
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
                },
              ]
          });
          const feeds = await createFeeds(query);
          res.json(feeds);
  } catch(error){
    console.log("this is the error ", error);
    return res.status(404).json({ feednotfound: "Feed not found" });
  }
});

  const createFeeds = (query) => {
    const userFeeds = [];
    query.forEach((item) => {
      item.follower.forEach((follow) => {
        const userFeed = [];
        userFeed.push(...follow.being_followed.Posts, ...follow.being_followed.Postcomments, ...follow.being_followed.Commentlikes, ...follow.being_followed.Postlikes);
        userFeed.sort((a, b) => {
          return a.createdAt - b.createdAt;
        });
        userFeeds.push(userFeed);
      });
    })
    return userFeeds;
  }

router.get("/:id/feed", async (req,res) => {
  const userId = req.query.id;
  db.User.findOne({ 
      where: {id: req.query.id},
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
              },
            ]
    }).then((user) => {
      let feed  = getFeed(users);
      res.json(users);
    }).catch((err) => {
      console.log("this is the error ", err);
      res.status(404).json(err)
   });  
});





module.exports = router;
