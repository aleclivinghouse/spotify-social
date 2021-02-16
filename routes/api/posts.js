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

router.post("/post/:userId", async (req, res) => {
    const userId = req.params.userId;
    const {title, feed_item, type, text, lyric_annotation, would_recommend, rating, artist, album, track} = req.body;
    let idsObj = {};
    console.log("this is the track ", track);
    try{
      if(artist.id){
          const theArtist = await db.Artist.findOrCreate({
            where: {spotify_id: artist.id},
            defaults: {
             spotify_id: artist.spotify_id,
             name: artist.name,
             href: artist.href,
             external_url: artist.external_url,
             followers_count: artist.followers_count
            }
          });
          console.log("this is theArtist ", theArtist.toJSON());
          idsObj.artistId = theArtist.toJSON().id;
      }
      if(track.id){
          const theTrack = await db.Track.findOrCreate({
            where: {spotify_id: track.id},
            defaults: {
             spotify_id: track.spotify_id,
             tile: track.title,
             href: track.href,
             external_url: track.external_url,
             preview_url: track.preview_url,
             followers_count: artist.followers_count
            }
          });
          console.log("this is theTrack ", theTrack);
          idsObj.trackId = theTrack.toJSON().id;
      }
      if(album.id){
        const theAlbum = await db.Album.findOrCreate({
          where: {spotify_id: album.id},
          defaults: {
           spotify_id: album.spotify_id,
           tile: album.title,
           href: track.href,
           external_url: track.external_url,
           preview_url: track.preview_url,
           release_date: track.release_date,
           followers_count: artist.followers_count
          }
        });
        console.log("this is theAlbum ", theAlbum);
        idsObj.albumId = theAlbum.toJSON().id;
    }
      const post = await db.Post.create({
         title,
         feed_item,
         type,
         text,
         lyric_annotation,
         would_recommend,
         rating,
         ArtistId: idsObj.artistId,
         TrackId: idsObj.trackId,
         AlbumId: idsObj.albumId,
       })
        res.json(post);
    } catch(error){
        console.log("there was an error ", error);
        res.status(404).json(error)
    }
});



module.exports = router;
