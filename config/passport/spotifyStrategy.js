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
        callbackURL: "/auth/spotify/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    });

module.exports = strategy;
