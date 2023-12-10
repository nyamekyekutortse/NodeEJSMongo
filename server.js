/**Load Node modules*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/**Loading external schemas */
const templateSchema = require('./data/schemas/blankSchema.js');

/**Initialize Express */
const app = express();

/**Setup port */
const port = 8080;
app.listen(port);

// Render static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/javascript', express.static(__dirname + 'public/javascript'));
app.use('/assets', express.static(__dirname + 'public/assets'));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

/**Database connection */ 
const { MongoClient } = require('mongodb');
const templateSchema = require('./data/schemas/blankSchema.js');

const uri = 'mongodb://localhost:27017'; // replace with your MongoDB connection string if needed, this is the default
const client = new MongoClient(uri);
var databaseObject; //use to interact with database and access collections

async function connectToMongoDB() 
{
  try 
  {
    await client.connect();
    console.log('Connected to MongoDB');
    databaseObject = client.db('local');
  } 
  catch (error) 
  {
    console.error('Failed to connect to MongoDB', error);
  }
}
module.exports =
{
    publicDataBase,
    connectToMongoDB
}
connectToMongoDB();


/** GET Routes */
app.get('/', async function (req, res)
{
    res.render('pages/index',
    {
        title: 'Template'
    });
});

/** POST Routes */
app.post('/', async function (req, res) 
{
  // TODO: Add your code here for handling the POST request
});