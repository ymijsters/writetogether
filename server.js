const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const fs = require("fs");
const http = require("http");

const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const pitch = require('./routes/api/pitches');


//DB config
const db = require('./config/keys').mongoURI;

// Connect to DB via Mongoose
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
//require('./config/passport')(passport);

app.use('/api/pitch', pitch);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`SERVER Running on port ${port}`));
