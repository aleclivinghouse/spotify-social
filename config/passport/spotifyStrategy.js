const SpotifyStrategy = require("passport-spotify").Strategy;
const fs = require("fs");
const passport = require("passport");
const db = require('.././database');
const User = require("../../models/User");
const chalk = require("chalk");

const dotenv = require('dotenv');
dotenv.config();

const opts = {};
opts.secretOrKey = process.env.SPOTIFY_CLIENT_SECRET;


const strategy = new SpotifyStrategy({
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/register/"
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ where: {spotify_id: profile.id} })
          .then(user => {
            if (user) {
              return done(null, user);
            } else {
              User.create({
                  display_name: profile.display_name,
                  email: profile.email,
                  password: null,
                  country: profile.country,
                  external_url: profile.external_urls.spotify,
                  spotify_id: profile.id,
                  spotify_uri: profile.uri,
                  followersCount: profile.followers.total
                })
                .then(newUser => {
                  return done(null, newUser);
                })
                .catch(err => console.log(err));
            }
          })
          .catch(err => console.log(err));

    });

module.exports = strategy;
