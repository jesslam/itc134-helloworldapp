const express = require('express');
const app = express();
const bodyparser = require('body-parser');
//const http = require('http');
//Import route
const data = require('./routes/routes.js')

app.use('/data', data);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number: ' + port);
});
