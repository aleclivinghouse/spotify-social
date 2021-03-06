const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const SpotifyStrategy = require('./spotifyStrategy');
const  db  = require('../../db/models/index');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.findByPk(id).then(function(user) {
       if (user) {
           done(null, user.get());
       } else {
           done(user.errors, null);
       }
   });
})

// ==== Register Strategies ====
passport.use(LocalStrategy);
passport.use(SpotifyStrategy);

module.exports = passport
