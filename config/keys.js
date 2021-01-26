import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  databaseURL: process.env.DATABASE_URL,
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  secretOrKey: process.env.SECRET_OR_KEY,
  secretLandingKey: process.env.SECRET_LANDING_KEY,
  secretLandingValue: process.env.SECRET_LANDING_VALUE
};
