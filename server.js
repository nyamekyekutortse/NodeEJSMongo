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
console.log('Server started on port ' + port);

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
const tempSchema = require('./data/schemas/blankSchema.js');

const uri = 'mongodb://localhost:27017'; // replace with your MongoDB connection string if needed, this is the default
const client = new MongoClient(uri);
var databaseObject; //use to interact with database and access collections

async function connectToMongoDB() 
{
  try 
  {
    await client.connect();
    console.log('Connected to MongoDB');
    databaseObject = client.db('432Final');
  } 
  catch (error) 
  {
    console.error('Failed to connect to MongoDB', error);
  }
}
module.exports =
{
    databaseObject,
    connectToMongoDB
}
connectToMongoDB();


/** GET Routes */
app.get('/', async function (req, res)
{
    res.render('pages/index',
    {
        className: 'SWE432',
    });
});

app.get('/donationScreen', async function (req, res)
{
    res.render('pages/donationScreen',
    {
        className: 'SWE432',
    });
});

app.post('/donationSubmission', async function (req, res)
{
  donationDocs = databaseObject.collection('donations');
  console.log("server side route in"); 
  donationDocs.insertOne(req.body);
		console.log("Playlist Created server side");
		res.send(donationDocs.findOne({donationId: req.body.id}));
})

app.get('/donationList', async function (req, res)
{
    try {
      console.log('Retrieving data from MongoDB');
      const donationsCollection = databaseObject.collection('donations');
      const donationsMade = await donationsCollection.find({}).toArray();
      res.render('pages/donationList',
      {
          className: 'SWE432',
          donationsMade: donationsMade
      });
    } 
    catch (error) 
    {
      console.error('Error retrieving data from MongoDB', error);
      res.status(500).send('Error retrieving data server side');
    }
});

/** POST Routes */
app.post('/', async function (req, res) 
{
  // TODO: Add your code here for handling the POST request
  donationDocs = databaseObject.collection('donations');
  console.log("server side route in"); 
  donationDocs.insertOne(req.body);
	console.log("Playlist Created server side");
	res.send(donationDocs.findOne({donationId: req.body.id}));
});