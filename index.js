const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//const http = require('http');
//Import route
const data = require('./routes/routes.js')

app.use('/data', data);

let mongoDB = 'mongodb://127.0.0.1:27017/ITC134.Greetings';

//mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error:'));

let port = 27017;

app.listen(port, () => {
    console.log('Server is up and running on port number: ' + port);
});
