var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('plutohiraeth', ['plutohiraeth']);
var serverPort = 9003;

app.use(express.static(__dirname + "/pluto-solutions-hiraeth"));

app.listen(serverPort);
console.log("Pluto solutions server running on port : " + serverPort);