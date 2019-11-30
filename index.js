const express = require('express');
var app = express();
const mongoose = require('mongoose');
//const http = require('http');

app.get('/', function (req, res){
    res.send('<h1>Hello World!</h1>')
    //res.send(200, {'Content-type': 'text/html'});
    //res.end('Hello World!');
    });

app.listen(3000);