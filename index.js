const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
    res.send(model);
})

//const http = require('http');
//Import route
const data = require('./routes/routes.js')

app.use('/data', data);

let mongoDB = 'mongodb+srv://publicuser:itc1343185@cluster0-xq50d.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});
//mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error:'));
//db.runCommand({connectionStatus:1, showPrivileges: true});
let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number: ' + port);
});
