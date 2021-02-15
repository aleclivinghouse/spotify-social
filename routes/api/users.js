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
const createFeed = require('../routeHelpers').createFeed;


 //users feed
router.get("/feed/:id", async (req,res) => {
  const userId = req.params.id;
  console.log("this is the id", userId);

  try {
  const query = await db.User.findOne({ 
      where: {id: userId},
      attributes: ['id','display_name', 'followers_count'],
      include: [{
          //follower is all other users our user is following
              model: db.Follow, as: "follower",
              separate: true,
          include: [{ 
              model: db.User, as: "being_followed",
              attributes: ['id', 'display_name', 'followers_count'],
                  include: [{
                    model: db.Post,
                    order: [['createdAt', 'DESC']],
                    separate: true,
                    include:[{
                      attributes: ['id', 'display_name', 'followers_count'],
                      model: db.User, 
                    }]
                  },
                  {
                    model: db.FavoriteTracksByAnArtistPost,
                    order: [['createdAt', 'DESC']],
                    separate: true,
                    include:[{
                      attributes: ['id', 'display_name', 'followers_count'],
                      model: db.User, 
                    }]
                  },
                  {
                    model: db.Repost,
                    order: [['createdAt', 'DESC']],
                    separate: true,
                    include:[{
                      model: db.User,
                      attributes: ['id', 'display_name'],
                    },{
                      model: db.Post,
                      include: [{
                        model: db.User,
                        attributes: ['id', 'display_name'],
                      }]
                    }]
                  },
                  {
                    model: db.Postcomment,
                    order: [['createdAt', 'DESC']],
                    separate: true,
                    include:[{
                      model: db.User,
                      attributes: ['id', 'display_name'],
                    }]
                  },
                  {
                    model: db.Postlike,
                    order: [['createdAt', 'DESC']],
                    separate: true,
                    include:[{
                      model: db.User,
                      attributes: ['id', 'display_name', 'followers_count'],
                    },{
                      model: db.Post,
                    }]
                  },
                  {
                    model: db.Commentlike,
                    order: [['createdAt', 'DESC']],
                    separate: true,
                    include:[{
                      model: db.User,
                      attributes: ['id', 'display_name', 'followers_count'],
                        },
                        {
                         model: db.Postcomment, 
                         include:[{
                          model: db.Post,
                         }]
                        }]
                  }
                ]
                }]
              }]
        });
        const feed = await createFeed(query);
        res.json(feed);
  } catch(error){
    console.log("this is the error ", error);
    return res.status(404).json({ feednotfound: "Feed not found" });
    }
  });

  //user activity
  router.get("/profile/:id", async (req,res) => {
    const userId = req.params.id;
    try {
    const query = await db.User.findOne({ 
      where: {id: userId},
      include:[
        {
        model: db.Profile,
        separate: true
        },
        {
          model: db.UserFavoriteAlbum,
          separate: true,
          include:[{
            model: db.Album,
            separate: true
          }]
        },{
          model: db.UserFavoriteArtist,
          separate: true,
          include:[{
            model: db.Artist,
            separate: true
          }]
        },
        {
          model: db.UserFavoriteTrack,
          separate: true,
          include:[{
            model: db.Track,
            separate: true
          }]
        },
        {
          model: db.Post,
          separate: true
        },
        {
          model: db.Postcomment,
          separate: true
        },
        {
          model: db.Postlike,
          separate: true
        },
        {
          model: db.Commentlike,
          separate: true
        }
    ]
      
    });

   }catch(error){
    console.log("this is the error ", error);
    return res.status(404).json({ feednotfound: "Feed not found" });
   }
});





module.exports = router;
