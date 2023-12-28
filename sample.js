var express = require('express');
var app = express();
const session = require('express-session');
const mongoose = require('mongoose');

//connect to database for storage
mongoose.connect('mongodb://127.0.0.1:27017/test');
const db = mongoose.connection;
db.once('open', () => {
    console.log('connected to mongo');
});

const mascotSchema = new mongoose.Schema({
    name: String,
    organization: String,
    birth_year: Number,
});

// configure session middleware to pass data between screens
const MongoStore = require('connect-mongo');
app.use(session(
    {
    secret: 'MySecretCode',
    saveUninitialized: true,
    resave: true,
    store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/test',
    autoRemove: 'interval',
    autoRemoveInterval: 10 // In minutes. Default
    })
}));