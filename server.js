// let http = require('http');
// let fs = require('fs');

// let server = http.createServer(function(req, res) {
    // console.log('request was made: ' + req.url);
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // let myTrivia = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myTrivia.pipe(res);
// });

// server.listen(3001, '127.0.0.1');
// console.log("You did it!");

var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/public')); 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/finish', function(req, res) {
    res.sendFile(path.join(__dirname + '/finish.html'));
});
app.get('/trivia', function(req, res) {
    res.sendFile(path.join(__dirname + '/trivia.html'));
});
var port = 3001; 
app.listen(port);
console.log('server on' + port);