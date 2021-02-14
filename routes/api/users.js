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
const createFeeds = require('../routeHelpers').createFeeds;
const createFeed = require('../routeHelpers').createFeed;

// Spotify Strategy
// passport.authenticate("spotify"),

router.get("/feed/all", async (req,res) => {
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
// const feeds = await createFeeds(query);

  

  //user ids to
router.get("/feed/:id", async (req,res) => {
  const userId = req.params.id;
  console.log("this is the id", userId);
  db.User.findOne({ 
      where: {id: userId},
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
                    include:[{
                      model: db.User
                    }]
                  },
                  {
                    model: db.Postcomment,
                    order: [['createdAt', 'DESC']],
                    separate: true,
                    include:[{
                      model: db.User
                    }]
                  },
                  {
                    model: db.Postlike,
                    order: [['createdAt', 'DESC']],
                    separate: true,
                    include:[{
                      model: db.User
                    },{
                      model: db.Post
                    }]
                  },
                  {
                    model: db.Commentlike,
                    order: [['createdAt', 'DESC']],
                    separate: true,
                    include:[{
                      model: db.User
                        },
                        {
                         model: db.Postcomment, 
                         include:[{
                          model: db.Post
                         }]
                        }
                      ]
                  }
                ]
                }]
              },
            ]
    }).then((user) => {
      res.json(user);
    }).catch((err) => {
      console.log("this is the error ", err);
      res.status(404).json(err)
   });  
});





module.exports = router;
