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
        res.status(404).json(error)
    }
});

router.get("/post/:id", async (req, res) => {
    const postId = req.params.id;
    try{
        const query = await db.Post.findOne({
            where: {id: postId},
            include:[
                {
                model: db.User,
                attributes: ['id', 'display_name', 'followers_count']
                },
                {
                    model: db.Postlike
                },
                {
                 model: db.Postcomment,
                 include: [
                     {
                    model: db.User,
                    attributes: ['id', 'display_name', 'followers_count']
                    }, 
                    {
                        model: db.Commentlike,
                        include: [{
                            model: db.User,
                            attributes: ['id', 'display_name', 'followers_count']
                                }]
                    }]
                }]
            });
        res.json(query);
    } catch(error){
        console.log("there was an error ", error);
        res.status(404).json(error)
    }
});

router.get("/favoritepost/:id", async (req, res) => {
    const postId = req.params.id;
    try{
       const query = await db.FavoriteTracksByAnArtistPost.findOne({
        where: {id: postId},
        include:[
            {
            model: db.User,
            attributes: ['id', 'display_name', 'followers_count']
            },
            {
             model: db.Postcomment,
             include: [
                 {
                model: db.User,
                attributes: ['id', 'display_name', 'followers_count']
                }, 
                {
                    model: db.Commentlike,
                    include: [
                            {
                        model: db.User,
                        attributes: ['id', 'display_name', 'followers_count']
                            }
                        ]
              }]
           }]
        })
        res.json(query);
    } catch(error){
        console.log("there was an error ", error);
        res.status(404).json(err)
    }
});

router.get("/repost/:id", async (req, res) => {
    const postId = req.params.id;
    try{
       const query = await db.Repost.findOne({
        where: {id: postId},
        include:[
            {
            model: db.User,
            attributes: ['id', 'display_name', 'followers_count']
            },
            {
                model: db.Post,
                include: [{
                    model: db.User,
                    attributes: ['id', 'display_name', 'followers_count']
                }]
            },
            {
             model: db.Postcomment,
             include: [
                 {
                model: db.User,
                attributes: ['id', 'display_name', 'followers_count']
                }, 
                {
                    model: db.Commentlike,
                    include: [
                            {
                        model: db.User,
                        attributes: ['id', 'display_name', 'followers_count']
                            }
                        ]
                    }
                ]
           }]
        })
        res.json(query);
    } catch(error){
        console.log("there was an error ", error);
        res.status(404).json(error)
    }
});



module.exports = router;
