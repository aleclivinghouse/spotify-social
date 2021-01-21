const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require('../../config/passport')
const db = require('../../config/database');
const User = require("../../models/User");
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const Op = Sequelize.Op;
dotenv.config();

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Spotify Strategy
// passport.authenticate("spotify"),
router.post("/login/spotify", (req, res) => {
  let followers = req.body.followers.total;
  if(followers === null){
    followers = 0;
  }
    User.findOrCreate({
      where: {spotify_id: req.body.id},
      defaults: {
        display_name: req.body.display_name,
        email: req.body.email,
        password: null,
        country: req.body.country,
        external_url:req.body.external_url,
        spotify_id: req.body.id,
        spotify_uri: req.body.uri,
        followersCount: followers
        }
      }).then(user => {
        console.log("find or create worked: ", user);
        const payload = {
          id: user.id,
          name: user.display_name
        };

        // Sign token
        jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      });
});




// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
    console.log('this is req.body: ', req.body);

  User.findOne({ where: {email: req.body.email} }).then(user => {
    if (user) {
      console.log("email already exists is firing")
      return res.status(400).json({ email: "Email already exists" });
    } else {
      console.log("the else statement is firing");

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          User.create({
              display_name: req.body.name,
              email: req.body.email,
              password: hash,
              country: null,
              external_url: null,
              spotify_id: null,
              spotify_uri: null,
              followersCount: null
            })
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });

      //else end
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ where: {email: req.body.email} }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    console.log("this is the user in the route: ", user)

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch & user.password.length > 0) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.display_name
        };

        // Sign token
        jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
