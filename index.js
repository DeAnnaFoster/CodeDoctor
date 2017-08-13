var express = require('express');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
var server = express();
var port = 3000;

// MIDDLEWARE
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));









server.listen(port, () => {
    console.log(`	
Starting up node,	
Available on:	
http://127.0.0.1:${port}	
Hit CTRL-C to stop the server`);
});