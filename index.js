const express = require('express');
const mongoose = require('mongoose');
//var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Hello World!');
}).listen(3000);