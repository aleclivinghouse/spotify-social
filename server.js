const express = require("express");
const bodyParser = require("body-parser");
const passport = require("./config/passport");
const path = require('path');

const users = require("./routes/api/users");
const db = require('./config/database');

const app = express();

// Body Parser
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Connect to PostPres
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session())

// Passport config
// Routes
app.use("/api/users", users);
app.get("/auth/external/callback",
    passport.authenticate("spotify"),
        (req, res) => {
          console.log("callback fired");
        })


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
